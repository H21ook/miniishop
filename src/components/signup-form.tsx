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

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
    return (
        <Card {...props} className="backdrop-filter backdrop-blur-md bg-opacity-90">
            <CardHeader>
                <CardTitle>Бүртгэл үүсгэх</CardTitle>
                <CardDescription>
                    Өөрийн мэдээллийг оруулан бүртгүүлээрэй.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <FieldGroup className="gap-4">
                        <Field>
                            <FieldLabel htmlFor="name">Овог нэр</FieldLabel>
                            <Input id="name" type="text" placeholder="John Doe" required />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="email">И-мэйл</FieldLabel>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                            <FieldDescription>
                                We&apos;ll use this to contact you. We will not share your email
                                with anyone else.
                            </FieldDescription>
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="password">Password</FieldLabel>
                            <Input id="password" type="password" required />
                            <FieldDescription>
                                Must be at least 8 characters long.
                            </FieldDescription>
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="confirm-password">
                                Confirm Password
                            </FieldLabel>
                            <Input id="confirm-password" type="password" required />
                            <FieldDescription>Please confirm your password.</FieldDescription>
                        </Field>
                        <FieldGroup>
                            <Field>
                                <Button type="submit">Create Account</Button>
                                <Button variant="outline" type="button">
                                    Sign up with Google
                                </Button>
                                <FieldDescription className="px-6 text-center">
                                    Already have an account? <Link href="/auth/login">Sign in</Link>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
    )
}
