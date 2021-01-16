import styled from 'styled-components';
import FreelancingImg from '../assets/img/freelance-cover.jpg';


const Styles = styled.div`
    .jumbo {
        background: url(${FreelancingImg}) no-repeat fixed;
        background-size: cover;
        height: 100vh;
        position: relative;
        z-index: -2;
        color: #fff;
    }

    .overlay {
        background-color: #ceceef;
        opacity: 0.2;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    .text-size {
        margin-top: 110px;
        color: black;
        font-size: 3em;
        font-weight: bold;
        // margin: 90px 10px 0px 10px;
    }


    .banner-caption .form-control,
.main-heading h2,
.search-filter .form-control,
body,
nav.bootsnav .megamenu-content .title,
nav.navbar.bootsnav ul.nav>li>a,
p {
	font-family: Montserrat, sans-serif
}

.main-heading {
	text-align: center;
	margin-bottom: 2em
}

.main-heading p {
	font-size: 16px;
	color: #707c88;
	margin-bottom: 5px;
	text-transform: uppercase
}

.dark .main-heading h2,
.dark .main-heading p {
	color: #fff
}

.main-heading h2 {
	color: #35434e;
	position: relative;
	font-weight: 600;
	margin-top: 0;
	margin-bottom: 10px
}

.main-heading h2>span {
	color: #11b719
}

.main-heading span.heading-line {
	width: 80px;
	height: 1.2px;
	display: block;
	background: #11b719;
	position: relative;
	margin: 0 auto
}

html body .extra-mrg-5 {
	margin: 0 -5px
}

html body .extra-mrg-10 {
	margin: 0 -10px
}

html body .extra-mrg-15 {
	margin: 0 -15px
}

html body .extra-mrg-20 {
	margin: 0 -20px
}


.grid-view .brows-job-company-img {
	width: 80px;
	margin: 10px auto;
	height: 80px;
	display: inline-block;
	border: 1px solid #e4e4e4;
	background: #fff;
	vertical-align: middle;
	border-radius: 50%;
	line-height: 80px
}

.grid-view .brows-job-company-img img {
	margin: 0 auto;
	vertical-align: middle;
	display: inline-block;
	max-width: 50px;
	line-height: 50px
}

.grid-view-caption {
	margin: 3em 0 0;
	padding: 0;
	border-top: 1px solid #eaeff5;
	display: flex;
	width: 100%
}

.brows-job-position {
	padding: 0 15px
}

.grid-view-caption li {
	display: inline-block;
	float: left;
	width: 50%;
	padding: 10px 0;
	line-height: 2.2
}

.brows-job-list {
	display: table;
	width: 100%;
	clear: both;
	padding: 15px 0;
	margin-bottom: 15px;
	transition: .4s;
	border: 1px solid #eaeff5;
	background: #fff;
	border-radius: 6px;
	box-shadow: 0 0 10px 0 rgba(88, 96, 109, .14);
	-webkit-box-shadow: 0 0 10px 0 rgba(88, 96, 109, .14);
	-moz-box-shadow: 0 0 10px 0 rgba(88, 96, 109, .14)
}

.brows-job-list:focus,
.brows-job-list:hover {
	transform: translateY(-5px);
	-webkit-transform: translateY(-5px)
}

.grid-view.brows-job-list {
	position: relative;
	text-align: center;
	padding-bottom: 0;
	margin-bottom: 45px
}

.grid-view.brows-job-list:focus,
.grid-view.brows-job-list:hover {
	border-color: transparent
}

.brows-job-company-img {
	width: 75px;
	margin: 10px auto;
	height: 75px;
	display: inline-block;
	background: #f4f5f7;
	vertical-align: middle;
	border-radius: 50%;
	line-height: 75px
}

.brows-job-company-img img {
	margin: 0 auto;
	vertical-align: middle;
	display: inline-block
}


.grid-view .brows-job-company-img {
	width: 80px;
	margin: 10px auto;
	height: 80px;
	display: inline-block;
	border: 1px solid #e4e4e4;
	background: #fff;
	vertical-align: middle;
	border-radius: 50%;
	line-height: 80px
}

.grid-view .brows-job-company-img img {
	margin: 0 auto;
	vertical-align: middle;
	display: inline-block;
	max-width: 50px;
	line-height: 50px
}



.brows-job-position h3 {
	color: #5b6d77;
	font-size: 20px;
	padding: 0;
	margin-bottom: 0;
	line-height: 1.4
}

span.job-num {
	padding: 5px 10px;
	border-radius: 4px;
	text-transform: capitalize;
	color: #8da2b3;
	background: #f3f6fb
}

.brows-job-position p span {
	font-size: 12px;
	color: #5a6f7c;
	margin-top: 12px;
	margin-right: 20px
}

.brows-job-position p .brows-job-sallery {
	margin-right: 0
}

.brows-job-position p .brows-job-sallery i {
	margin-right: 10px
}


.brows-job-position .job-type {
	padding: 4px 12px;
	color: #fff;
	margin-left: 10px;
	border-radius: 2px;
	text-transform: capitalize
}


span.job-num {
	padding: 5px 10px;
	border-radius: 4px;
	text-transform: capitalize;
	color: #8da2b3;
	background: #f3f6fb
}

.grid-view .brows-job-type span {
	position: absolute;
	padding: 4px 15px;
	top: 10px;
	right: 0;
	color: #fff;
	line-height: 1.4;
	font-size: 12px;
	border-radius: 2px 0 0 2px
}


.grid-view-caption {
	margin: 3em 0 0;
	padding: 0;
	border-top: 1px solid #eaeff5;
	display: flex;
	width: 100%
}

.grid-view-caption li {
	display: inline-block;
	float: left;
	width: 50%;
	padding: 10px 0;
	line-height: 2.2
}

.grid-view-caption li:first-child {
	border-right: 1px solid #eaeff5
}

.grid-view-caption li p {
	margin-bottom: 0
}

.grid-view-caption li i {
	padding-right: 10px
}

.grid-view-caption .brows-job-location {
	margin-top: 0
}

.grid-view-caption .brows-job-location p i {
	margin-right: 0
}

.grid-view-caption .brows-job-location p,
.grid-view-caption .brows-job-sallery {
	font-size: 14px;
	margin-bottom: 0
}

.brows-job-location {
	margin-top: 23px
}

.brows-job-location p {
	font-size: 18px;
	color: #5a6f7c
}

.brows-job-location p i {
	font-size: 16px;
	margin-right: 10px
}
.full-time {
	background: #03a504
}

.part-time {
	background: #f6931e
}

.enternship {
	background: #d20001
}

.freelanc {
	background: #26a9e1
}
.grid-view-caption .brows-job-location {
	margin-top: 0
}

.grid-view-caption .brows-job-location p i {
	margin-right: 0
}

.grid-view-caption .brows-job-location p,
.grid-view-caption .brows-job-sallery {
	font-size: 14px;
	margin-bottom: 0
}

.brows-job-position p .brows-job-sallery {
	margin-right: 0
}

.brows-job-position p .brows-job-sallery i {
	margin-right: 10px
}

.grid-view-caption .brows-job-location p,
.grid-view-caption .brows-job-sallery {
	font-size: 14px;
	margin-bottom: 0
}

@media screen and (max-width:767px) {


	.brows-job-list {
		text-align: center;
		padding-bottom: 30px
	}

}




// styling of how it works 

.working-process {
	text-align: center;
	position: relative;
	margin-top: 30px
}

.working-process h4 {
	margin: 10px 0
}

.working-process p {
	padding: 2px 15px;
	line-height: 1.9
}

.process-icon,
span.process-img {
	width: 80px;
	height: 80px;
	position: relative;
	display: inline-block
}

span.process-img {
	margin: 15px auto 0
}

span.process-img img {
	z-index: 1
}

span.process-num {
	position: absolute;
	font-size: 60px;
	font-weight: 600;
	opacity: .1;
	left: -30px;
	top: -10px
}














// Adding CSS of testimonials and hire freelancers

.testimonial {
	background: #f4f7f7
}
.client-testimonial .client-description,
.work-process-caption p {
	color: #707c88;
	font-size: 14px;
	font-family: Montserrat, sans-serif
}
.client-testimonial {
	text-align: center;
	margin: 50px 10px 0;
	padding: 0 10% 4%;
	background: #fff;
	border-radius: 4px;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);
	-webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);
	-moz-box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);
	-o-shadow: 0 0 10px 0 rgba(0, 0, 0, .1)
}

.client-testimonial .pic {
	width: 100px;
	height: 100px;
	border-radius: 50%;
	border-bottom: 2px solid #07b107;
	display: inline-block;
	margin-top: -50px;
	overflow: hidden;
	box-shadow: 0 2px 6px rgba(0, 0, 0, .15)
}

.client-testimonial .pic img {
	width: 100%;
	height: auto
}

.client-testimonial .client-description {
	line-height: 30px;
	margin: 10px 0 5px
}

.client-testimonial .client-testimonial-title {
	font-size: 14px;
	font-weight: 700;
	margin: 0;
	color: #55646f;
	text-transform: uppercase
}

.client-testimonial .client-testimonial-rating {
	margin: 0 0 15px;
	padding: 0;
	list-style: none
}

.client-testimonial .client-testimonial-rating li {
	color: #4caf50;
	display: inline-block
}

.client-testimonial .client-testimonial-rating li.fa-star {
	color: #4caf50
}
.client-testimonial .pic {
	width: 100px;
	height: 100px;
	border-radius: 50%;
	border-bottom: 2px solid #07b107;
	display: inline-block;
	margin-top: -50px;
	overflow: hidden;
	box-shadow: 0 2px 6px rgba(0, 0, 0, .15)
}
.client-testimonial .pic img {
	width: 100%;
	height: auto
}
.client-testimonial .client-testimonial-title {
	font-size: 14px;
	font-weight: 700;
	margin: 0;
	color: #55646f;
	text-transform: uppercase
}
.client-testimonial .client-testimonial-rating {
	margin: 0 0 15px;
	padding: 0;
	list-style: none
}

.client-testimonial .client-testimonial-rating li {
	color: #4caf50;
	display: inline-block
}

.client-testimonial .client-testimonial-rating li.fa-star {
	color: #4caf50
}
.freelance-container {
	background: #fff;
	border-radius: 6px;
	overflow: hidden;
	text-align: center;
	margin-bottom: 30px;
	position: relative;
	transition: .4s;
	border: 1px solid #eaeff5
}
.freelance-container:focus,
.freelance-container:hover {
	transform: translateY(-5px);
	-webkit-transform: translateY(-5px);
	cursor: pointer
}
.style-2 .freelance-box {
	padding: 40px 20px 35px
}
.freelance-box-thumb,
.style-2 .freelance-box-thumb {
	border-radius: 50%;
	box-shadow: 0 0 14px 0 rgba(0, 0, 0, .08);
	overflow: hidden
}
.style-2 .freelance-box-thumb {
	width: 100px;
	height: 100px;
	margin: 0 auto 15px;
	-webkit-box-shadow: 0 0 14px 0 rgba(0, 0, 0, .08);
	-moz-box-shadow: 0 0 14px 0 rgba(0, 0, 0, .08)
}
.style-2 .freelance-box-extra ul li {
	border-radius: 2px
}
.style-2 .sidebar-box {
	padding: 40px 20px 35px
}
.style-2 .sidebar-box-thumb {
	width: 100px;
	height: 100px;
	margin: 0 auto 15px;
	border-radius: 50%;
	overflow: hidden;
	box-shadow: 0 0 14px 0 rgba(0, 0, 0, .08);
	-webkit-box-shadow: 0 0 14px 0 rgba(0, 0, 0, .08);
	-moz-box-shadow: 0 0 14px 0 rgba(0, 0, 0, .08)
}
.grid-slide .grid-slide-box:focus,
.grid-slide-2 .freelance-box:focus {
	outline: 0
}
.freelance-box {
	text-align: center;
	padding: 40px 20px 15px
}

.style-2 .freelance-box {
	padding: 40px 20px 35px
}
.freelance-status {
	position: absolute;
	left: 32px;
	top: 25px;
	background: #01c73d;
	color: #fff;
	text-transform: capitalize;
	padding: 4px 18px;
	border-radius: 50px;
	font-weight: 500
}

.freelance-status-not {
	position: absolute;
	left: 32px;
	top: 25px;
	background: #ba2e0b;
	color: #fff;
	text-transform: capitalize;
	padding: 4px 18px;
	border-radius: 50px;
	font-weight: 500
}
.flc-rate,
.sidebar-status {
	position: absolute;
	font-weight: 500
}
.flc-rate {
	right: 32px;
	top: 20px;
	font-size: 18px
}
.freelance-inner-box {
	padding: 50px 20px 10px;
	text-align: center
}
.freelance-box-thumb,
.style-2 .freelance-box-thumb {
	border-radius: 50%;
	box-shadow: 0 0 14px 0 rgba(0, 0, 0, .08);
	overflow: hidden
}

.freelance-box-thumb {
	width: 120px;
	height: 120px;
	margin: 0 auto 25px;
	-webkit-box-shadow: 0 0 14px 0 rgba(0, 0, 0, .08);
	-moz-box-shadow: 0 0 14px 0 rgba(0, 0, 0, .08)
}

.style-2 .freelance-box-thumb {
	width: 100px;
	height: 100px;
	margin: 0 auto 15px;
	-webkit-box-shadow: 0 0 14px 0 rgba(0, 0, 0, .08);
	-moz-box-shadow: 0 0 14px 0 rgba(0, 0, 0, .08)
}

.freelance-box-detail h4 {
	margin-bottom: 4px;
	font-size: 20px;
	text-transform: capitalize
}

.freelance-box-detail .desination,
.freelance-box-detail .location {
	font-weight: 500;
	font-size: 15px;
	display: block;
	color: #677484
}
.rattings .fa {
	color: #99abb9
}

.rattings .fa.fill {
	color: #FF9800
}
.freelance-box-extra ul {
	margin: 15px 0;
	padding: 0
}

.freelance-box-extra ul li {
	display: inline-block;
	list-style: none;
	padding: 3px 15px;
	border: 1px solid #b9c5ce;
	border-radius: 50px;
	margin: 5px;
	font-weight: 500;
	color: #657180
}

.freelance-box-extra ul li.more-skill {
	color: #fff;
	border-color: #1194f7
}

.style-2 .freelance-box-extra ul li {
	border-radius: 2px
}

.btn.btn-freelance-two {
	border-radius: 2px;
	color: #fff;
	padding: 9px 17px
}
`;

export default Styles;