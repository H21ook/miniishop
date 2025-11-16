"use client"

import { Button } from "@/components/ui/button"
import {
    Field,
    FieldGroup,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { FieldValues, useForm } from "react-hook-form"
import { login } from "@/actions/auth"
import { useTransition } from "react"
import { Checkbox } from "./ui/checkbox"
import { Separator } from "./ui/separator"
import { Label } from "./ui/label"

export function LoginForm() {
    const [isPending, startTransition] = useTransition();
    const { handleSubmit, register } = useForm();

    const onSubmit = (values: FieldValues) => {
        startTransition(async () => {
            const formData = new FormData();
            formData.append("email", values.email)
            formData.append("password", values.password)
            const res = await login(formData)
            if (!res.isOk) {
                alert(res.message)
                return;
            }
        })
    }

    return (
        <div className="h-full flex flex-col justify-between">
            <div></div>
            <div className="mb-10">
                <div className="mb-6">
                    <h1 className="text-xl font-bold mb-2">Тавтай морилно уу.</h1>
                    <p className="text-sm text-muted-foreground">
                        Бүртгэлтэй имэйл болон нууц үг ашиглан нэврэнэ үү.
                    </p>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FieldGroup className="gap-4">
                            <Field>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    {...register("email")}
                                />
                            </Field>
                            <Field>
                                <Input id="password" type="password" required {...register("password")} />
                            </Field>
                            <div className="flex items-center justify-between">
                                <div className="w-fit flex items-center gap-2">
                                    <Checkbox id="remember" />
                                    <Label htmlFor="remember">Сануулах</Label>
                                </div>
                                <div className="text-nowrap">
                                    <Link
                                        href="/auth/forgot-password"
                                        className="text-sm leading-none font-medium text-primary underline underline-offset-4"
                                    >
                                        Нууц үг мартсан?
                                    </Link>
                                </div>
                            </div>
                            <Field>
                                <Button disabled={isPending} type="submit">Нэвтрэх</Button>
                                <div className="flex items-center gap-4">
                                    <Separator className="flex-1" />
                                    <div className="text-xs text-muted-foreground mb-0.5">эсвэл</div>
                                    <Separator className="flex-1" />
                                </div>
                                <Button disabled={isPending} variant="outline" type="button">
                                    Google ашиглан нэвтрэх
                                </Button>
                            </Field>
                        </FieldGroup>

                    </form>
                </div>
            </div>
            <div className="text-center text-sm text-muted-foreground">
                Бүртгэл байхгүй юу? <Link href="/auth/sign-up" className="text-sm leading-none font-medium text-primary underline underline-offset-4">Бүртгүүлэх</Link>
            </div>
        </div>
    )
}
