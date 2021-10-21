export default class ColumnChart {
    constructor(parameters) {

        //this.data = [];

        if (parameters !== undefined) {
            this.data = parameters.data;
            this.label = parameters.label;
            this.value = parameters.value;
            this.formatHeading = parameters.formatHeading;
            this.link = parameters.link;
        }
        
        if (this.formatHeading === undefined){
            this.formatHeading = function (str) { return str; };
        }        

        this.chartHeight = 50;

        this.element;

        this.render();
    }

    render() {

        const wrapper = document.createElement('div');
        wrapper.className = 'column-chart';
        //console.log(this.data);
        if (this.data === undefined) wrapper.className += ' column-chart_loading';
        wrapper.style = `--chart-height: ${this.chartHeight}`;

        let linkHtml = '';

        if (this.link !== undefined){
            linkHtml = `<a href="${this.link}" class="column-chart__link">View all</a>`;
        }

        wrapper.innerHTML = `<div class="column-chart__title">
                                Total ${this.label}
                                ${linkHtml}
                            </div>`;

        const container = document.createElement('div');
        container.className = 'column-chart__container';
        container.innerHTML = `<div data-element="header" class="column-chart__header">${this.formatHeading(this.value)}</div>`;

        const body = document.createElement('div');
        body.className = 'column-chart__chart';
        body.dataset.element = 'body';

        if (this.data !== undefined) {
            const chartHeightCoefficient = this.chartHeight / Math.max(...this.data);

            for (const item of this.data) {
                const chartElement = document.createElement('div');
                chartElement.style = `--value: ${ Math.floor(item * chartHeightCoefficient) }`;
                chartElement.dataset.tooltip = `${ Math.round(100 * item * chartHeightCoefficient / this.chartHeight) }%`;
                
                body.append(chartElement);
            }
        }

        container.append(body);

        wrapper.append(container);

        this.element = wrapper;
    }

    update() {

    }

    remove() {
        this.element.remove()
    }

    destroy() {

    }
}
