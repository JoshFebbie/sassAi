"use client"

import * as z from "zod"
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Heading } from "@/components/heading"
import { formSchema } from "./constants";
import { Form } from "@/components/ui/form"

const ConversationPage = () => {
  const form = useForm<z.infer<typeof formSchema>> ({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
    mode: "onChange",
  })

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <div>
        <Heading
          title="Conversation"
          description="One of the most adgvanced chat apps in the world."
          icon={MessageSquare}
          iconColor="text-[#ff6cab]"
          bgColor="bg-[#111827]"
        />
        <div className="px-4 lg:px-8">
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}
              className="
              rounded:lg
              border-2
              w-full
              p-4
              px-3
              md:px-6
              focus-within:shadow-sm
              grid
              grid-cols-12
              gap-2
              ">

              </form>
            </Form>
          </div>
        </div>
    </div>
  )
}
export default ConversationPage;