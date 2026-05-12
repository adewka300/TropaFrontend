import type { ReactNode } from "react"

export type Review = {
    nickName: string
    description: ReactNode
    userImage: string
    rating?: number
    date?: string
    images?: string[]
    bgImage?: string
}
