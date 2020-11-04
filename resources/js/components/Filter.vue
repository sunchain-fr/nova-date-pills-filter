<template>

    <div ref="viewport" class="overflow-hidden pill-filter">

        <div>

            <h3 class="text-sm uppercase tracking-wide text-80 bg-30 p-3">
                {{ fullDate }}
            </h3>

            <div ref="content" class="flex px-2 pb-2 ">

                <Pill @click.native="previous()" active :key="previous">
                    <
                </Pill>

                <Pill v-for="option in filter.options"
                      :key="option.value"
                      @click.native="changeRange(option.value)"
                      :active="range === option.value"
                >
                    {{ option.name }}
                </Pill>
                <Pill @click.native="next()" active :key="nextone">
                    >
                </Pill>
            </div>
        </div>

    </div>

</template>

<script>
import Pill from './Pill'

export default {
    name: 'PillFilter',
    components: {Pill},
    props: {
        resourceName: {
            type: String,
            required: true
        },
        filterKey: {
            type: String,
            required: true
        },
    },
    data: function () {
        return {
            range: "week", // Day, week or month
        }
    },
    mounted() {
        this.$data.range = "week"
        console.log(this.filter.from, this.filter.to)
        this.setDates(moment(this.filter.from), moment(this.filter.to))
    },
    methods: {
        setDates(from, to) {
            this.filter.from = from.format('YYYY-MM-DD')
            this.filter.to = to.format('YYYY-MM-DD')
            this.$store.commit(`${this.resourceName}/updateFilterState`, {
                filterClass: this.filterKey,
                value: {
                    from: from.format('YYYY-MM-DD'),
                    to: to.format('YYYY-MM-DD'),
                    range: this.$data.range
                }
            })

            this.$emit('change')
        },

        previous() {
            let to = moment(this.filter.from).clone()
            let from = moment(this.filter.from).subtract(1, this.$data.range)
            this.setDates(from, to)

        },
        next() {
            let from = moment(this.filter.to).clone()
            let to = moment(this.filter.to).add(1, this.$data.range)
            const __ret = this.setDateLimits(from, to, this.$data.range);
            from = __ret.from;
            to = __ret.to;
            this.setDates(from, to)
        },
        setDateLimits: function (from, to, newRange) {
            if (from.clone().add(1, newRange).isAfter(moment())) { // set to to NOW
                to = moment()
                from = moment().subtract(1, newRange)
            } else {
                to = from.clone().add(1, newRange)
            }
            return {from, to};
        },
        changeRange(newRange) {
            if (this.$data.range === newRange) return;
            let from = moment(this.filter.from) //.subtract(1, newRange).format('YYYY-MM-DD')
            let to = moment(this.filter.to) // .add(1, newRange)
            const __ret = this.setDateLimits(from, to, newRange,);
            from = __ret.from;
            to = __ret.to;
            this.setDates(from, to)
            this.$data.range = newRange
        }
    },
    computed: {
        filter() {
            return this.$store.getters[`${this.resourceName}/getFilter`](this.filterKey)
        },
        // value() {
        //     return this.filter.currentValue || {from: '', to: ''}
        // },
        from() {
            return this.filter.from
        },
        to() {
            return this.filter.to
        },
        fullDate: function () {
            return moment(this.from).format('DD/MM/YYYY') + ' - ' + moment(this.to).format('DD/MM/YYYY')
        }
    }
}
</script>
