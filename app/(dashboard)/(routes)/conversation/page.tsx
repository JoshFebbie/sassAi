"use client"

import * as z from "zod"
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form"
import { Button } from "@/components/ui/button"


import { Heading } from "@/components/heading"
import { formSchema } from "./constants";

const ConversationPage = () => {
  const form = useForm<z.infer<typeof formSchema>> ({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
    // mode: "onChange",
  })

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <div>
        <Heading
          title="Conversation"
          description="State of the art chat Model."
          icon={MessageSquare}
          iconColor="text-[#ff6cab]"
          bgColor="bg-[#19243c]"
        />
        <div className="px-4 lg:px-8">
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}
              className="
              rounded-lg
              border-2
              w-full
              p-2
              px-3
              md:px-6
              focus-within:shadow-sm
              grid
              grid-cols-12
              gap-2
              ">
            <FormField
            name="prompt"
            render={({field}) => (
              <FormItem className="col-span-12 lg:col-span-10" >
                <FormControl className="m-0 p-0">
                  <Input
                  className="border-0 outline-none
                  focus-visible:ring-0
                  focus-visible:ring-transparent"
                  disabled={isLoading}
                  placeholder="Example: How do I calculate the radius of a circle?"
                  {...field}
                   />
                </FormControl>
              </FormItem>
            )}
            />
            <Button className="col-span-12 lg:col-span-2">
              Generate
            </Button>
              </form>
            </Form>
          </div>
        </div>
    </div>
  )
}
export default ConversationPage;