import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

const Navbar = async () => {

    const { getUser } = getKindeServerSession()
    const user = await getUser()

    const isAdmin = user?.email === process.env.ADMIN_EMAIL
    
    return (
        <nav className="sticky z-[100] h-14 insert-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link href="/" className="flex z-40 font-semibold">
                        case<span className="text-green-600">cobra</span>
                    </Link>

                {/* Verificar se o usuario esta ou nao logado, e mostrar uma das duas opcoes */}
                    <div className="h-full flex items-center space-x-4">
                        {user ? (
                            <>
                                <Link href="/api/auth/logout" className={buttonVariants({
                                    size: "sm", variant: "ghost"
                                })}>
                                    Sair
                                </Link>

                                {isAdmin ? <Link href="/api/auth/logout" className={buttonVariants({
                                    size: "sm", variant: "ghost"
                                })}>
                                    Painel
                                </Link> : null}

                                <Link href="/configure/upload" className={buttonVariants({
                                    size: "sm", className: "hidden sm:flex items-center gap-1"
                                })}>
                                    Criar capa
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href="/api/auth/register" className={buttonVariants({
                                    size: "sm", variant: "ghost"
                                })}>
                                    Inscrever-se
                                </Link>

                                <Link href="/api/auth/login" className={buttonVariants({
                                    size: "sm", variant: "ghost"
                                })}>
                                    Conecte-se
                                </Link>

                                <div className="h-8 w-px bg-zinc-100 hidden sm:block" />

                                <Link href="/configure/upload" className={buttonVariants({
                                    size: "sm", className: "hidden sm:flex items-center gap-1"
                                })}>
                                    Criar capa
                                    <ArrowRight className="ml-1.5 h-5 w-5" />
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar