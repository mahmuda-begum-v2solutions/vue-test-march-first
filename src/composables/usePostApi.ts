import {API_BASE} from '@/constants/constants'
import type { ItemObj } from '@/types/types'

export function usePostApi (){

    const fetchPost = async (): Promise<ItemObj[]> => {
        const res = await fetch(API_BASE)
        if(!res.ok) throw new Error("error loading fetchPost");
        return await res.json()
    }

    const createPost = async(data: Omit<ItemObj, 'id'>): Promise<ItemObj> => {
        const res = await fetch(API_BASE, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        if(!res.ok) throw new Error("error loading createPost");
        return await res.json()
    }

    const updatePost = async (id: number, data: Partial<Omit<ItemObj, 'id'>>): Promise<ItemObj>=>{
        const res = await fetch(`${API_BASE}/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        if(!res.ok) throw new Error("error loading updatePost");
        return await res.json()
    }

    const deletePost = async (id: number): Promise<boolean> => {
        const res = await fetch(`${API_BASE}/${id}`, {method: 'DELETE'})
        if(!res.ok) throw new Error("error loading deletePost");
        return true
    }

    return {
        fetchPost, createPost, updatePost, deletePost
    }
}