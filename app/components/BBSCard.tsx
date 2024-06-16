import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "./ui/card";
import { BBSData } from "../types/types";

interface BBSDataProps {
  bbs: BBSData;
}

const BBSCard = ({ bbs }: BBSDataProps) => {
  const { username, content } = bbs;

  return (
    <Card>
      <CardHeader>
        <CardDescription>{`投稿者：${username}`}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
};

export default BBSCard;
