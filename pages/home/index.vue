<template>
	<view class="home">
		<!-- 轮播 -->
		<bw-swiper :swiperList="info" indicatorActiveColor="rgb(0, 193, 210)" style="width:100%;margin-top: 10rpx;" :swiperType="true" :textTip="true"></bw-swiper>
		
		<view class="list" v-for="(item, index) in contentObj" :key="index">
			<view class="title">
				<text>{{item.title}}</text>
			</view>
			<view class="theme" v-for="(value, key) in item.listData" :key="key" @click="goDetail(value)">
				<view class="item">
					<image mode="widthFix" :src="value.cover"></image>
					<view class="content">
						<view class="top-title">{{ value.title }}</view>
						<view class="other">
							<view class="left">
								<view>
									<text class="icon iconfont icon-geren"></text>
									{{ value.author_name }}
								</view>
								<view>
									<text class="icon iconfont icon-pinglun"></text>
									{{ value.comment }}
								</view>
							</view>
							<view class="right">
								<text>{{ value.published_at }}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniSwiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue';
import bwSwiper from '../../components/bw-swiper/bw-swiper.vue';
export default {
	components: {
		uniSwiperDot,
		bwSwiper
	},
	data() {
		return {
			info: [
				{
					id: 1,
					type: 'image',
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				},
				{
					id: 2,
					type: 'image',
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				},
				{
					id: 3,
					type: 'image',
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}
			],
			current: 0,
			mode: 'long',
			dotsStyles: {
				backgroundColor: 'rgba(83, 200, 249,0.3)',
				border: '1px rgba(83, 200, 249,0.3) solid',
				color: '#fff',
				selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
				selectedBorder: '1px rgba(83, 200, 249,0.9) solid'
			},
			contentObj: [
				{
					title: '热门文章',
					listData: [
						{
							cover: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							title: '疯狂的世界恢复很快就发的是 士大夫和感受到附近说的话疯狂绝对是史蒂芬孙快结婚电饭锅大概隧道股份但是',
							author_name: '小菜',
							published_at: '2017-10-13',
							comment: 12
						},
						{
							cover: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							title: '士大夫和感受到附近说的话疯狂绝对是史蒂芬孙快结婚电饭锅大概隧道股份但是',
							author_name: '小菜',
							published_at: '2017-11-13',
							comment: 56
						},
						{
							cover: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							title: '疯狂的世界恢复很快就发的是 士大夫和感受到附近说的话疯狂绝对是史蒂芬孙快结婚电饭锅大概隧道股份但是',
							author_name: '小菜',
							published_at: '2017-10-13',
							comment: 34
						},
						{
							cover: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							title: '士大夫和感受到附近说的话疯狂绝对是史蒂芬孙快结婚电饭锅大概隧道股份但是',
							author_name: '小菜',
							published_at: '2013-04-13',
							comment: 63
						},
						{
							cover: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							title: '疯狂的世界恢复很快就发的是 士大夫和感受到附近说的话疯狂绝对是史蒂芬孙快结婚电饭锅大概隧道股份但是',
							author_name: '小菜',
							published_at: '2017-10-19',
							comment: 54
						}
					]
				},
				{
					title: '最新文章',
					listData: [
						{
							cover: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							title: '疯狂的世界恢复很快就发的是 士大夫和感受到附近说的话疯狂绝对是史蒂芬孙快结婚电饭锅大概隧道股份但是',
							author_name: '小菜',
							published_at: '2017-10-13',
							comment: 12
						},
						{
							cover: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							title: '士大夫和感受到附近说的话疯狂绝对是史蒂芬孙快结婚电饭锅大概隧道股份但是',
							author_name: '小菜',
							published_at: '2017-11-13',
							comment: 56
						},
						{
							cover: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							title: '疯狂的世界恢复很快就发的是 士大夫和感受到附近说的话疯狂绝对是史蒂芬孙快结婚电饭锅大概隧道股份但是',
							author_name: '小菜',
							published_at: '2017-10-13',
							comment: 34
						},
						{
							cover: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							title: '士大夫和感受到附近说的话疯狂绝对是史蒂芬孙快结婚电饭锅大概隧道股份但是',
							author_name: '小菜',
							published_at: '2013-04-13',
							comment: 63
						},
						{
							cover: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							title: '疯狂的世界恢复很快就发的是 士大夫和感受到附近说的话疯狂绝对是史蒂芬孙快结婚电饭锅大概隧道股份但是',
							author_name: '小菜',
							published_at: '2017-10-19',
							comment: 54
						}
					]
				}
			]
		};
	},
	onLoad() {},
	methods: {
		change(e) {
			this.current = e.detail.current;
		},
		goDetail() {
			uni.navigateTo({
				url: '../test/index',
				animationType: 'pop-in',
				animationDuration: 200
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.home {
	.swiper-box{
		width: 100%;
		height: 400rpx;
		image{
			width: 100%;
			// height: 100%;
		}
		.swiper-item{
			height: 100%;
		}
	}
	.list{
		padding: 0rpx 20rpx;
		margin-top: 20rpx;
		border-bottom: 1rpx solid #bebebe;
		&:last-child{
			border-bottom: 1rpx solid transparent;
		}
		.title{
			position: relative;
			font-size: 32rpx;
			color: #333;
			display: block;
			padding: 0 20rpx;
			&::before{
				content: '';
				left: 0;
				top: 0;
				background: rgb(0, 193, 210);
				width: 3px;
				height: 100%;
				position: absolute;
			}
		}
		.theme{
			border-bottom: 1rpx solid #bebebe;
			&:last-child{
				border-bottom: 1rpx solid transparent;
			}
			.item{
				margin: 20rpx 0;
				display: flex;
				image{
					width: 200rpx;
					margin-right: 10rpx;
				}
				.content{
					display: flex;
					flex: 1;
					justify-content: space-between;
					flex-direction: column;
					.top-title{
						font-size: 24rpx;
						color: #666;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
					}
					.other{
						font-size: 24rpx;
						display: flex;
						justify-content: space-between;
						color: #999;
						.left{
							display: flex;
							view{
								margin-right: 15rpx;
								text{
									margin-right: 5rpx;
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>
