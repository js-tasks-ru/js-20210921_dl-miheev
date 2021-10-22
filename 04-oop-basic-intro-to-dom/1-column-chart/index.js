export default class ColumnChart {
    
    chartHeight = 50;
    element;
    dataElements = {};
    
    constructor({
        data = [],
        label = '',
        link = '',
        value = 0,
        formatHeading = function (str) { return str; }
    } = {}) {
        this.data = data;
        this.label = label;
        this.value = formatHeading(value);
        this.link = link;

        this.render();
    }

    get template() {
        return /*html*/`
            <div class="column-chart column-chart_loading" style="--chart-height: ${this.chartHeight}}">
            <div class="column-chart__title">
                Total ${this.label}
                ${this.getLink()}
            </div>
            <div class="column-chart__container">
                <div data-element="header" class="column-chart__header">
                    ${this.value}
                </div>
                <div data-element="body" class="column-chart__chart">
                    ${this.getBodyHtml(this.data)}
                </div>
            </div>
            </div>
        `;
    }

    getLink() {
        let result = '';
        if (this.link.length){
            result = /*html*/`<a href="${this.link}" class="column-chart__link">View all</a>`;
        }
        return result;
    }

    getBodyHtml(data = []){
        const scale = this.chartHeight / Math.max(...data);
        return data.map(item=>{ return `<div style="--value: ${ Math.floor(item * scale)}" data-tooltip="${ Math.round(100 * item * scale / this.chartHeight) }%"></div>`}).join('');
    }

    render() {

        const wrapper = document.createElement('div');
        
        wrapper.innerHTML = this.template;

        this.element = wrapper.firstElementChild;

        if (this.data.length){
            this.element.classList.remove('column-chart_loading');
        }

        this.dataElements = this.getDataElements(this.element);
    }

    getDataElements(element){
        const result = {};

        for(const item of element.querySelectorAll('[data-element]')){
            const name = item.dataset.element;
            result[name] = item;
        }

        return result;
    }

    update(data) {
        this.dataElements.body.innerHTML = this.getBodyHtml(data)
    }

    remove() {
        if (this.element){
            this.element.remove()
        }
    }

    destroy() {
        this.remove();
        this.element = null;
        this.dataElements = {};
    }
}
