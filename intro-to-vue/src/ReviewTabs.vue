<template>
    <div>
        <div>
            <span class="tab"
            v-for="(tab, index) in tabs" :key="index"
            :class="{activeTab : selectedTab === tab}"
            @click="selectedTab = tab">
                {{tab}}
            </span>
        </div
        >
        <div v-if="selectedTab === 'Reviews'">
            <ul>
            <li v-for="(review, index) in reviews" :key="index">
                Name:{{review.name}}, Review:{{review.review}}, Rating: {{review.rating}}
            </li>
            </ul>
        </div>
        <div v-else>
            <product-review></product-review>
        </div>
    </div>    
</template>

<script>
import ProductReview from './ProductReview';

export default {
    name: 'review-tabs',
    components: {
        ProductReview
    },
    props: {
        reviews: Array
    },
    data: function() {
        return {
            tabs: ['Reviews', 'Make a Review'],
            selectedTab: 'Reviews'
        }
    }
}
</script>

<style>

</style>
