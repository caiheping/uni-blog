<template>
	<view class="article">
		<scroll-view id="tab-bar" class="scroll-h" :scroll-x="true" :show-scrollbar="false" :scroll-into-view="scrollInto">
			<view v-for="(tab, index) in tabBars" :key="tab.id" class="uni-tab-item" :id="tab.id" :data-current="index" @click="ontabtap">
				<text class="uni-tab-item-title" :class="tabIndex == index ? 'uni-tab-item-title-active' : ''">{{ tab.name }}</text>
			</view>
		</scroll-view>
		<view class="line-h"></view>
		<swiper class="swiper-box" :style="{ height: swiperheight + 'px' }" :current="tabIndex" @change="tabChange">
			<swiper-item v-for="(items, index) in Lists" :key="index">
				<template v-if="items.list.length > 0">
					<scroll-view scroll-y class="list">
						<view class="item-list" v-for="(item, index) in items.list" :key="index">
							<view class="item-top">
								<view class="item-top-left">
									<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" mode="aspectFill"></image>
									<text>小菜</text>
								</view>
								<view class="item-top-right">
									<text>python</text>
								</view>
							</view>
							<view class="item-content">
								<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" mode="aspectFill"></image>
								<text>这是测试</text>
							</view>
							<view class="item-bottom">
								<view class="item-bottom-left">
									<view>
										<text class="icon iconfont icon-shoucang"></text>
										<text>5</text>
									</view>
									<view>
										<text class="icon iconfont icon-pinglun"></text>
										<text>20</text>
									</view>
								</view>
								<view class="item-bottom-right">
									<text class="icon iconfont icon-time"></text>
									<text>2015-10-05</text>
								</view>
							</view>
						</view>
					</scroll-view>
				</template>
				<template v-else>
					<no-thing></no-thing>
				</template>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
import noThing from '../../components/common/no-thing.vue';
export default {
	components: {
		noThing
	},
	data() {
		return {
			swiperheight: 500,
			tabIndex: 0,
			tabBars: [
				{
					name: '关注',
					id: 'guanzhu'
				},
				{
					name: '推荐',
					id: 'tuijian'
				},
				{
					name: '体育',
					id: 'tiyu'
				},
				{
					name: '热点',
					id: 'redian'
				},
				{
					name: '财经',
					id: 'caijing'
				},
				{
					name: '娱乐',
					id: 'yule'
				},
				{
					name: '军事',
					id: 'junshi'
				},
				{
					name: '历史',
					id: 'lishi'
				},
				{
					name: '本地',
					id: 'bendi'
				}
			],
			scrollInto: '',
			Lists: [
				{
					list: [
						{
							userpic: '../../static/demo/userpic/12.jpg',
							username: '昵称',
							isguanzhu: false,
							title: '我是标题',
							type: 'img', // img:图文,video:视频
							titlepic: '../../static/demo/datapic/11.jpg',
							infonum: {
								index: 0, //0:没有操作，1:顶,2:踩；
								dingnum: 11,
								cainum: 11
							},
							commentnum: 10,
							sharenum: 10
						},
						{
							userpic: '../../static/demo/userpic/12.jpg',
							username: '昵称',
							isguanzhu: true,
							title: '我是标题',
							type: 'video', // img:图文,video:视频
							titlepic: '../../static/demo/datapic/11.jpg',
							playnum: '20w',
							long: '2:47',
							infonum: {
								index: 1, //0:没有操作，1:顶,2:踩；
								dingnum: 11,
								cainum: 11
							},
							commentnum: 10,
							sharenum: 10
						}
					]
				},
				{
					list: []
				},
				{
					list: []
				}
			]
		};
	},
	onLoad() {
		uni.getSystemInfo({
			success: res => {
				let height = res.windowHeight - uni.upx2px(80); // 减去tabs高度
				this.swiperheight = height;
			}
		});
	},
	// 监听搜索框点击事件
	onNavigationBarSearchInputClicked() {
		uni.navigateTo({
			url: '../search/search'
		});
	},
	methods: {
		ontabtap(e) {
			this.tabIndex = e.target.dataset.current || e.currentTarget.dataset.current;
		},
		// 滑动事件
		tabChange(e) {
			this.tabIndex = e.detail.current;
		}
	}
};
</script>

<style scoped lang="scss">
/* #ifndef APP-PLUS */
page {
	width: 100%;
	min-height: 100%;
	display: flex;
}

/* #endif */

.article {
	flex: 1;
	flex-direction: column;
	overflow: hidden;
	background-color: #ffffff;
	/* #ifdef MP-ALIPAY || MP-BAIDU */
	height: 100vh;
	/* #endif */
	.scroll-h {
		display: flex;
		width: 750rpx;
		height: 80rpx;
		flex-direction: row;
		white-space: nowrap;
		.uni-tab-item {
			display: inline-block;
			flex-wrap: nowrap;
			padding-left: 34rpx;
			padding-right: 34rpx;
			.uni-tab-item-title {
				color: #555;
				font-size: 30rpx;
				height: 80rpx;
				line-height: 80rpx;
				flex-wrap: nowrap;
				white-space: nowrap;
			}
			.uni-tab-item-title-active {
				color: rgb(0, 193, 210);
			}
		}
	}
	.line-h {
		height: 1rpx;
		background-color: #cccccc;
	}
	.swiper-box {
		flex: 1;
		.list{
			height: 100%;
			.item-list{
				padding: 0 20rpx;
				border-bottom: 1px solid #BEBEBE;
				.item-top{
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 20rpx 0;
					.item-top-left{
						display: flex;
						image{
							width: 50rpx;
							height: 50rpx;
							display: block;
							margin-right: 10rpx;
							border-radius: 50%;
						}
						text{
							color: #666;
						}
					}
					.item-top-right{
						text{
							color: #666;
						}
					}
				}
				.item-content{
					display: flex;
					flex-direction: column;
					image{
						width: 100%;
						display: block;
						border-radius: 4px;
					}
					text{
						font-size: 24rpx;
						color: #666;
					}
				}
				.item-bottom{
					color: #999;
					display: flex;
					justify-content: space-between;
					.item-bottom-left{
						display: flex;
						view{
							margin-right: 20rpx;
							text{
								margin-right: 5rpx;
							}
						}
					}
					.item-bottom-right{
						display: flex;
						text{
							margin-left: 5rpx;
						}
					}
				}
			}
		}
	}
}
</style>
