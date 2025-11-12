"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { FieldValues, useForm } from "react-hook-form"
import { login } from "@/actions/auth"
import { useTransition } from "react"

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
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
        <Card {...props} className="backdrop-filter backdrop-blur-md bg-opacity-90">
            <CardHeader>
                <CardTitle>Нэвтрэх</CardTitle>
                <CardDescription>
                    И-мэйл болон нууц үг ашиглан нэврэнэ үү.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="email">И-мэйл</FieldLabel>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                                {...register("email")}
                            />
                        </Field>
                        <Field>
                            <div className="flex items-center">
                                <FieldLabel htmlFor="password">Нууц үг</FieldLabel>
                                <a
                                    href="#"
                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                >
                                    Нууц үг мартсан?
                                </a>
                            </div>
                            <Input id="password" type="password" required {...register("password")} />
                        </Field>
                        <Field>
                            <Button disabled={isPending} type="submit">Нэвтрэх</Button>
                            <Button disabled={isPending} variant="outline" type="button">
                                Google ашиглан нэвтрэх
                            </Button>
                            <FieldDescription className="text-center">
                                Бүртгэл байхгүй юу? <Link href="/auth/sign-up">Бүртгүүлэх</Link>
                            </FieldDescription>
                        </Field>
                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
    )
}
