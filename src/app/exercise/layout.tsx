import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Fitness Exercise - Exercise",
  description: "Fitness Exercise app. Know about your exercise ..",
};

export default function ExerciseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
