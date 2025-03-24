export type PostFieldErrors = {
    title?: string;
    content?: string;
}

export class PostValidator{
    title: string
    content: string
    constructor(title: string, content: string){
        this.title = title.trim()
        this.content = content.trim()
    }

    validator(): PostFieldErrors{
        const errrors: PostFieldErrors = {}
        if(!this.title){
            errrors.title = "title required"
        }else if(this.title.length > 100){
            errrors.title = "title max length 100"
        }

        if(!this.content){
            errrors.content = "content required"
        }else if(this.content.length > 300){
            errrors.title = "content max length 300"
        }

        return errrors
    }
}