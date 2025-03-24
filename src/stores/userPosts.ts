import { defineStore } from "pinia";
import type { ItemObj } from '@/types/types'
import { usePostApi } from "@/composables/usePostApi";

const { fetchPost, createPost, updatePost, deletePost } = usePostApi()

export const usePostStore = defineStore('postStore', {
    state: () => ({
        itemsArr: [] as ItemObj[],
        loading: false as boolean,
        error: null as string | null,
        searchText: "" as string,
        filteredItemsArr: [] as ItemObj[],
    }),
    actions: {
        async fetchPst(){
            this.loading = true
            this.error = null
            try{
                const data = await fetchPost()
                this.itemsArr = data
            }catch(err: any){
                this.error = err.message
            }finally{
                this.loading = false
            }
        },
        async addPost(newItem: Omit<ItemObj, "id">){
            try{
                const data = await createPost(newItem)
                this.itemsArr.unshift(data)
            }catch(err: any){
                this.error = err.message
            }
        },
        async updatePost(id: number, editItem: Partial<Omit<ItemObj, 'id'>>){
            try{
                const updated = await updatePost(id, editItem)
                const itemToEdit =  this.itemsArr.findIndex((e)=>e.id === id)
                if(itemToEdit !== -1){
                    this.itemsArr[itemToEdit] = updated
                }
            }catch(err: any){
                this.error = err.message
            }
        },
        async deletePost(id: number){
            try{
                const deleted = await deletePost(id)
                this.itemsArr = this.itemsArr.filter((e)=>e.id !== id)
            }catch(err: any){
                this.error = err.message
            }
        },
        init(){
            this.fetchPst()
        },
        getSearchTest(text: string){
            this.searchText = text
        },
        getFilteredItems(){
            this.filteredItemsArr = this.itemsArr.filter((item)=>{
                return item.title.toLowerCase().includes(this.searchText.toLowerCase())
            })
        }
    },
    getters: {
        totalItems : (state) => {
            return state.itemsArr.length
        },
        getById : (state) => (id: number) =>{
            return state.itemsArr.find(i => i.id === id)
        }
    }
})