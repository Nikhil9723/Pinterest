class InfiniteScroll {
    constructor( {target, callback, threshold = 300 } ) {
        this.target = target;
        this.callback= callback;
        this.threshold = threshold;
        this.onScroll = this.onScroll.bind(this);
        this.attach();
    }

    attach() {
        this.target.addEventListener("scroll", this.onScroll);
    }

    onScroll() {
        const { scrollTop, scrollHeight, clientHeight } = this.target;
        if(scrollHeight - scrollTop - clientHeight < this.threshold) {
            this.callback();
        }
    }

    dettach() {
        this.target.removeEventListner("scroll", this.onScroll);
    }
}

export default InfiniteScroll;