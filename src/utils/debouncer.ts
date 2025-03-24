export class Debounce{
    _timer: null | number = null
    _delay: number

    constructor(delay = 300){
        this._delay = delay
    }

    run(callback: ()=> void){
        if(this._timer) clearTimeout(this._timer);
        this._timer = window.setTimeout(callback, this._delay)
    }
}