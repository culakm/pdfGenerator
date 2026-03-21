<template>
	<p>pako</p>
	<div id="pdf-content">
		<div class="roadbook-item" v-for="item in items" :key="item.order">
			<div class="order">{{ item.order }}</div>
			<div v-if="item.hasCoords" class="lat">{{ item.lat }}</div>
			<div v-if="item.hasCoords" class="lng">{{ item.lng }}</div>
			<div class="note" v-html="item.note"></div>
			<div v-if="item.hasCheck" class="check"></div>
		</div>
	</div>
</template>

<script setup>
const items = [
	{ order: 1, lat: "111", lng: "222", note: "Zaciatok poznamka", hasCoords: true, hasCheck: true },
	{
		order: 2,
		lat: "",
		lng: "",
		note: `Poznamka s checkom toto je moja poznamka je hovacky dlha a este ju predlzime.toto je moja poznamka je hovacky dlha a este ju predlzime.toto je moja poznamka je hovacky dlha a este ju predlzime.toto je moja poznamka je hovacky dlha a este ju predlzime toto je moja poznamka je hovacky dlha a este ju predlzime toto je moja poznamka je hovacky dlha a este ju predlzime toto je moja poznamka je hovacky dlha a este ju predlzime toto je moja poznamka je hovacky dlha a este ju predlzime toto je moja poznamka je hovacky dlha a este ju predlzime toto je moja poznamka je hovacky dlha a este ju predlzime toto je moja poznamka je hovacky dlha a este ju predlzimetoto je moja poznamka je hovacky dlha a este ju predlzimetoto je moja poznamka je hovacky dlha a este ju predlzimetoto je moja poznamka je hovacky dlha a este ju predlzime toto je moja poznamka je hovacky dlha a este ju predlzime Zaciatok poznamka je Nefarebna--\u00e2dsafdsa dsajkdsj sdg aksdga gsdajskjgjkasdj kgsa skj gajk gjdsajk sdgasga d kasjklasj kg asgdjkg asdjk gajk gjdsajk sdgasga d kasjklasj kg asgdjk gajk gjdsajk sdgasga d kasjklasj kg asgdjk gajk gjdsajk sdgasga d kasjklasj kg asgdjk gajk gjdsajk sdgasga d kasjklasj kg asgdjk`,
		hasCoords: false,
		hasCheck: true,
	},
	{ order: 3, lat: "", lng: "", note: "kratucko s checkom", hasCoords: false, hasCheck: true },
	{
		order: 4,
		lat: "111",
		lng: "222",
		note: `Zaciatok poznamka je farebna --\u00e2dsafdsa dsajkdsj sdg aksdga gsdajskjgjkasdj kgsa skj gajk gjdsajk sdgasga d kasjklasj kg asgdjkg asdjk gajk gjdsajk sdgasga d kasjklasj kg asgdjk gajk gjdsajk sdgasga d kasjklasj kg asgdjk gajk gjdsajk sdgasga d kasjklasj kg asgdjk gajk gjdsajk sdgasga d kasjklasj kg asgdjk`,
		hasCoords: true,
		hasCheck: true,
	},
	{ order: 5, lat: "", lng: "", note: "Len poznamka", hasCoords: false, hasCheck: false },
	{ order: 6, lat: "111", lng: "222", note: "a zase vsetko", hasCoords: true, hasCheck: true },
	{ order: 7, lat: "", lng: "", note: `sdagg poznamka je <strike>uplne&nbsp; &nbsp;</strike> f<span style="background-color: red;"> arebna</span>&nbsp;\u00e2dsafdsa`, hasCoords: true, hasCheck: true },
	{
		order: 8,
		lat: "48\u00b053'22.0\"N",
		lng: "18\u00b002'15.9\"E",
		note: "poznamka 2 sdafasdkjgfjasdkgas kgd ak sdkgasdjgajkls dklgklasdjklgjaskdl gkl;asdkgljkl askljdgklasklgd gasdgjkasjdkgakg gsdalkj skdgakjgs kjla sdgjasdgj ajgjdaskjgajskj gaksdgkasjdgk akljs dgklasklgd gasdgjkasjdkgakg gsdalkj skdgakjgs kjla sdgjasdgj ajgjdaskjgajskj gaksdgkasjdgk akljs",
		hasCoords: true,
		hasCheck: true,
	},
	{ order: 9, lat: "48\u00b053'22.0\"N", lng: "18\u00b002'15.9\"E", note: "No note provided.", hasCoords: true, hasCheck: true },
	{ order: 10, lat: "", lng: "", note: "No note provided.", hasCoords: true, hasCheck: true },
	{ order: 11, lat: "", lng: "", note: "No note provided.", hasCoords: true, hasCheck: true },
	{ order: 12, lat: "", lng: "", note: "No note provided.", hasCoords: true, hasCheck: true },
	{
		order: 13,
		lat: "48\u00b053'22.0\"N",
		lng: "18\u00b002'15.9\"E",
		note: `toto je moja poznamka je hovacky dlha a este ju predlzime.toto je moja poznamka je hovacky dlha a este ju predlzime.toto je moja poznamka je hovacky dlha a este ju predlzime.toto je moja poznamka je hovacky dlha a este ju predlzime toto je moja poznamka je hovacky dlha a este ju predlzime toto je moja poznamka je hovacky dlha a este ju predlzime toto je moja poznamka je hovacky dlha a este ju predlzime toto je moja poznamka je hovacky dlha a este ju predlzime toto je moja poznamka je hovacky dlha a este ju predlzime toto je moja poznamka je hovacky dlha a este ju predlzime toto je moja poznamka je hovacky dlha a este ju predlzimetoto je moja poznamka je hovacky dlha a este ju predlzimetoto je moja poznamka je hovacky dlha a este ju predlzimetoto je moja poznamka je hovacky dlha a este ju predlzime toto je moja poznamka je hovacky dlha a este ju predlzime`,
		hasCoords: true,
		hasCheck: true,
	},
	{ order: 14, lat: "", lng: "", note: `toto je fare<span style="background-color: yellow;">bna po</span>znamka\u00e2`, hasCoords: true, hasCheck: true },
	{ order: 15, lat: "", lng: "", note: "No note provided.", hasCoords: true, hasCheck: true },
	{ order: 16, lat: "", lng: "", note: `poznamka je <strike>uplne&nbsp; &nbsp;</strike> f<span style="background-color: red;"> arebna</span>&nbsp;\u00e2dsafdsa`, hasCoords: true, hasCheck: true },
	{
		order: 17,
		lat: "48\u00b053'22.0\"N",
		lng: "18\u00b002'15.9\"E",
		note: "poznamka 2 sdafasdkjgfjasdkgas kgd ak sdkgasdjgajkls dklgklasdjklgjaskdl gkl;asdkgljkl askljdgklasklgd gasdgjkasjdkgakg gsdalkj skdgakjgs kjla sdgjasdgj ajgjdaskjgajskj gaksdgkasjdgk akljs dgklasklgd gasdgjkasjdkgakg gsdalkj skdgakjgs kjla sdgjasdgj ajgjdaskjgajskj gaksdgkasjdgk akljs",
		hasCoords: true,
		hasCheck: true,
	},
	{ order: 18, lat: "48\u00b053'22.0\"N", lng: "18\u00b002'15.9\"E", note: "No note provided.", hasCoords: true, hasCheck: true },
	{ order: 19, lat: "", lng: "", note: "No note provided.", hasCoords: true, hasCheck: true },
	{ order: 20, lat: "", lng: "", note: "No note provided.", hasCoords: true, hasCheck: true },
	{ order: 21, lat: "", lng: "", note: "No note provided.", hasCoords: true, hasCheck: true },
	{ order: 22, lat: "", lng: "", note: "toto je moja poznamka", hasCoords: true, hasCheck: true },
	{ order: 23, lat: "", lng: "", note: `toto je fare<span style="background-color: yellow;">bna po</span>znamka\u00e2`, hasCoords: true, hasCheck: true },
	{ order: 24, lat: "", lng: "", note: "No note provided.", hasCoords: true, hasCheck: true },
	{ order: 25, lat: "", lng: "", note: `poznamka je <strike>uplne&nbsp; &nbsp;</strike> f<span style="background-color: red;"> arebna</span>&nbsp;\u00e2dsafdsa`, hasCoords: true, hasCheck: true },
	{
		order: 26,
		lat: "48\u00b053'22.0\"N",
		lng: "18\u00b002'15.9\"E",
		note: "poznamka 2 sdafasdkjgfjasdkgas kgd ak sdkgasdjgajkls dklgklasdjklgjaskdl gkl;asdkgljkl askljdgklasklgd gasdgjkasjdkgakg gsdalkj skdgakjgs kjla sdgjasdgj ajgjdaskjgajskj gaksdgkasjdgk akljs dgklasklgd gasdgjkasjdkgakg gsdalkj skdgakjgs kjla sdgjasdgj ajgjdaskjgajskj gaksdgkasjdgk akljs",
		hasCoords: true,
		hasCheck: true,
	},
	{ order: 27, lat: "48\u00b053'22.0\"N", lng: "18\u00b002'15.9\"E", note: "No note provided.", hasCoords: true, hasCheck: true },
	{ order: 28, lat: "", lng: "", note: "No note provided.", hasCoords: true, hasCheck: true },
	{ order: 29, lat: "", lng: "", note: "No note provided.", hasCoords: true, hasCheck: true },
	{ order: 30, lat: "", lng: "", note: "No note provided.", hasCoords: true, hasCheck: true },
	{ order: 31, lat: "", lng: "", note: "toto je moja poznamka", hasCoords: true, hasCheck: true },
	{ order: 32, lat: "", lng: "", note: `toto je fare<span style="background-color: yellow;">bna po</span>znamka\u00e2`, hasCoords: true, hasCheck: true },
	{ order: 33, lat: "", lng: "", note: "No note provided.", hasCoords: true, hasCheck: true },
	{ order: 34, lat: "", lng: "", note: `poznamka je <strike>uplne&nbsp; &nbsp;</strike> f<span style="background-color: red;"> arebna</span>&nbsp;\u00e2dsafdsa`, hasCoords: true, hasCheck: true },
	{
		order: 35,
		lat: "48\u00b053'22.0\"N",
		lng: "18\u00b002'15.9\"E",
		note: "poznamka 2 sdafasdkjgfjasdkgas kgd ak sdkgasdjgajkls dklgklasdjklgjaskdl gkl;asdkgljkl askljdgklasklgd gasdgjkasjdkgakg gsdalkj skdgakjgs kjla sdgjasdgj ajgjdaskjgajskj gaksdgkasjdgk akljs dgklasklgd gasdgjkasjdkgakg gsdalkj skdgakjgs kjla sdgjasdgj ajgjdaskjgajskj gaksdgkasjdgk akljs",
		hasCoords: true,
		hasCheck: true,
	},
	{ order: 36, lat: "48\u00b053'22.0\"N", lng: "18\u00b002'15.9\"E", note: "No note provided.", hasCoords: true, hasCheck: true },
	{ order: 37, lat: "", lng: "", note: "No note provided.", hasCoords: true, hasCheck: true },
	{ order: 38, lat: "", lng: "", note: "No note provided.", hasCoords: true, hasCheck: true },
	{ order: 39, lat: "", lng: "", note: "No note provided.", hasCoords: true, hasCheck: true },
	{ order: 40, lat: "", lng: "", note: "toto je moja poznamka", hasCoords: true, hasCheck: true },
	{ order: 41, lat: "", lng: "", note: `toto je fare<span style="background-color: yellow;">bna po</span>znamka\u00e2`, hasCoords: true, hasCheck: true },
	{ order: 42, lat: "", lng: "", note: "No note provided.", hasCoords: true, hasCheck: true },
	{ order: 43, lat: "", lng: "", note: `poznamka je <strike>uplne&nbsp; &nbsp;</strike> f<span style="background-color: red;"> arebna</span>&nbsp;\u00e2dsafdsa`, hasCoords: true, hasCheck: true },
	{
		order: 44,
		lat: "48\u00b053'22.0\"N",
		lng: "18\u00b002'15.9\"E",
		note: "poznamka 2 sdafasdkjgfjasdkgas kgd ak sdkgasdjgajkls dklgklasdjklgjaskdl gkl;asdkgljkl askljdgklasklgd gasdgjkasjdkgakg gsdalkj skdgakjgs kjla sdgjasdgj ajgjdaskjgajskj gaksdgkasjdgk akljs dgklasklgd gasdgjkasjdkgakg gsdalkj skdgakjgs kjla sdgjasdgj ajgjdaskjgajskj gaksdgkasjdgk akljs",
		hasCoords: true,
		hasCheck: true,
	},
	{ order: 45, lat: "48\u00b053'22.0\"N", lng: "18\u00b002'15.9\"E", note: "No note provided.", hasCoords: true, hasCheck: true },
	{ order: 46, lat: "", lng: "", note: "No note provided.", hasCoords: true, hasCheck: true },
	{ order: 47, lat: "", lng: "", note: "No note provided.", hasCoords: true, hasCheck: true },
	{ order: 48, lat: "", lng: "", note: "No note provided.", hasCoords: true, hasCheck: true },
	{ order: 49, lat: "", lng: "", note: "toto je moja poznamka", hasCoords: true, hasCheck: true },
	{ order: 50, lat: "", lng: "", note: `toto je fare<span style="background-color: yellow;">bna po</span>znamka\u00e2`, hasCoords: true, hasCheck: true },
	{ order: 51, lat: "", lng: "", note: "No note provided.", hasCoords: true, hasCheck: true },
];
</script>

<style scoped>
* {
	box-sizing: border-box;
}

#pdf-content {
	/* max-width: 190mm; */
	display: contents;
	margin: 0 auto;
}

.roadbook-item {
	display: flex;
	flex-direction: row;
	border-width: 1px 1px 1px 1px;
	border-style: solid;
	border-color: #111;
	margin: 0;
	width: 100%;
	min-height: 2.2rem;
	page-break-inside: avoid;
	break-inside: avoid;
}

.roadbook-item > div {
	border-right: 1px solid #bbb;
	padding: 0.1rem 0.2rem;
	display: flex;
	align-items: center;
	font-size: 1rem;
	background: #fff;
}

.roadbook-item > div:last-child {
	border-right: none;
}

.roadbook-item > .order {
	width: 3%;
	font-weight: bold;
	flex-shrink: 0;
	flex-basis: auto;
}

.roadbook-item > .lat {
	width: 12%;
	flex-shrink: 0;
	flex-basis: auto;
}

.roadbook-item > .lng {
	width: 12%;
	flex-shrink: 0;
	flex-basis: auto;
}

.roadbook-item > .note {
	width: 68%;
	min-width: 10rem;
	text-align: left;
	flex-grow: 1;
}

.roadbook-item > .check {
	width: 5%;
	min-width: 2.2rem;
	flex-basis: 0;
}
</style>
