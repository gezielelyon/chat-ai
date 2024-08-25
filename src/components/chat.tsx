"use client";

import { useChat } from "ai/react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const Chat = () => {
  const { messages, input, handleSubmit, handleInputChange, isLoading } =
    useChat();

  return (
    <Card className="max-w-xl w-full bg-black border-t border-slate-6">
      <CardHeader>
        <CardTitle className="text-white font-bold">Chat AI</CardTitle>
        <CardDescription className="text-slate-11">
          Chat Bot created by Geziel Elyon that using Vercel AI SDK.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ScrollArea className="w-full h-[600px] overflow-y-auto pr-4">
          {messages.map((message) => (
            <div key={message.id} className="flex gap-2 mb-4">
              {message.role === "user" ? (
                <Avatar className="border border-slate-6">
                  <AvatarFallback>GE</AvatarFallback>
                  <AvatarImage src="https://github.com/gezielelyon.png" />
                </Avatar>
              ) : (
                <Avatar className="border border-slate-6">
                  <AvatarFallback>AI</AvatarFallback>
                  <AvatarImage src="https://github.com/vercel.png" />
                </Avatar>
              )}

              <p className="leading-relaxed text-slate-11">
                <span className="block font-bold text-white">
                  {message.role === "user" ? "Human" : "AI"}
                </span>
                {message.content}
              </p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>

      <CardFooter>
        <form className="flex w-full gap-2" onSubmit={handleSubmit}>
          <Input
            value={input}
            disabled={isLoading}
            placeholder="How can I help you?"
            onChange={handleInputChange}
            className="
              bg-[#121414] 
              placeholder:text-slate-11
              text-white
              border-slate-6
              hover:border-slate-11
              focus-visible:border-slate-11
              focus-visible:outline-none
              focus-visible:ring-transparent
              focus-visible:ring-offset-0
              transition
              duration-200
            "
          />
          <Button
            type="submit"
            className="bg-white hover:bg-white text-black font-semibold hover:opacity-80 transition duration-200"
          >
            {!isLoading ? "Send" : "Loading..."}
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
};
