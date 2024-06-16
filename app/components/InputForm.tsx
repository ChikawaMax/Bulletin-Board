"use client";

import { postBBS } from "@/app/actions/postBBSaction";
import { Button } from "@/app/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const formSchema = z.object({
  username: z
    .string()
    .min(1, { message: "ユーザー名は1文字以上で入力してください。" }),
  title: z
    .string()
    .min(1, { message: "タイトルは1文字以上で入力してください。" }),
  content: z
    .string()
    .min(1, { message: "本文は1文字以上で入力してください。" })
    .max(1000, { message: "本文は1000文字以内で入力してください。" }),
});

export const InputForm = () => {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "名無し",
      title: "タイトル",
      content: "",
    },
  });

  async function onSubmit(value: z.infer<typeof formSchema>) {
    const { username, title, content } = value;
    postBBS({ username, title, content });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 lg:w-1/2 px-7 mt-10 mb-3 border rounded-lg p-3"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ユーザー名</FormLabel>
              <FormControl>
                <Input placeholder="ユーザー名" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />{" "}
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>本文</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="投稿内容"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">投稿</Button>
      </form>
    </Form>
  );
};
