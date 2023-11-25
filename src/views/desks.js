import React from 'react'

import { Helmet } from 'react-helmet'

import SectionHeading from '../components/section-heading'
import ItemCard from '../components/item-card'
import './desks.css'

const Desks = (props) => {
  return (
    <div className="desks-container">
      <Helmet>
        <title>Desks - Dyuwani Online Store</title>
        <meta
          name="description"
          content=" Explore a curated collection of contemporary and classic furniture pieces designed to elevate your living spaces."
        />
        <meta property="og:title" content="Desks - Dyuwani Online Store" />
        <meta
          property="og:description"
          content="Explore a curated collection of contemporary and classic furniture pieces designed to elevate your living spaces. "
        />
      </Helmet>
      <div className="desks-navbar">
        <header data-role="Header" className="desks-header max-width-container">
          <div className="desks-navbar1">
            <div className="desks-container01">
              <img
                alt="search3271286"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xOC4zMTkgMTQuNDMyNkMyMC43NjI4IDExLjI5NDEgMjAuNTQyIDYuNzUzNDQgMTcuNjU2OSAzLjg2ODI2QzE0LjUzMjcgMC43NDQwNjcgOS40NjczNCAwLjc0NDA2NyA2LjM0MzE1IDMuODY4MjZDMy4yMTg5NSA2Ljk5MjQ2IDMuMjE4OTUgMTIuMDU3OCA2LjM0MzE1IDE1LjE4MkM5LjIyODMzIDE4LjA2NzIgMTMuNzY5IDE4LjI4NzkgMTYuOTA3NSAxNS44NDQyQzE2LjkyMSAxNS44NTk0IDE2LjkzNTEgMTUuODc0NCAxNi45NDk3IDE1Ljg4OTFMMjEuMTkyNCAyMC4xMzE3QzIxLjU4MjkgMjAuNTIyMiAyMi4yMTYxIDIwLjUyMjIgMjIuNjA2NiAyMC4xMzE3QzIyLjk5NzEgMTkuNzQxMiAyMi45OTcxIDE5LjEwOCAyMi42MDY2IDE4LjcxNzVMMTguMzY0IDE0LjQ3NDlDMTguMzQ5MyAxNC40NjAyIDE4LjMzNDMgMTQuNDQ2MSAxOC4zMTkgMTQuNDMyNlpNMTYuMjQyNiA1LjI4MjQ4QzE4LjU4NTggNy42MjU2MiAxOC41ODU4IDExLjQyNDYgMTYuMjQyNiAxMy43Njc4QzEzLjg5OTUgMTYuMTEwOSAxMC4xMDA1IDE2LjExMDkgNy43NTczNiAxMy43Njc4QzUuNDE0MjEgMTEuNDI0NiA1LjQxNDIxIDcuNjI1NjIgNy43NTczNiA1LjI4MjQ4QzEwLjEwMDUgMi45MzkzMyAxMy44OTk1IDIuOTM5MzMgMTYuMjQyNiA1LjI4MjQ4WicgZmlsbD0nYmxhY2snLz4KPC9zdmc+Cg=="
                className="desks-image"
              />
              <input
                type="text"
                placeholder="search"
                className="desks-input input"
              />
            </div>
            <div className="desks-middle">
              <div className="desks-left">
                <a href="#categories" className="desks-shop navbar-link">
                  SHOP
                </a>
                <a href="#lookbook" className="desks-lookbook navbar-link">
                  LOOKBOOK
                </a>
                <a href="#trending_items" className="desks-special navbar-link">
                  SPECIAL
                </a>
              </div>
              <span className="navbar-logo-title">DYUWANI</span>
              <div className="desks-right">
                <a href="#about" className="navbar-link">
                  ABOUT
                </a>
                <a href="#blog" className="desks-blog navbar-link">
                  BLOG
                </a>
                <a href="#contact" className="desks-contact navbar-link">
                  CONTACT
                </a>
              </div>
            </div>
            <div className="desks-icons">
              <img
                alt="iconsbxscart3271299"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTIxLjgyMiA3LjQzMUMyMS42MzUgNy4xNjEgMjEuMzI4IDcgMjEgN0g3LjMzM0w2LjE3OSA0LjIzQzUuODY3IDMuNDgyIDUuMTQzIDMgNC4zMzMgM0gyVjVINC4zMzNMOS4wNzcgMTYuMzg1QzkuMjMyIDE2Ljc1NyA5LjU5NiAxNyAxMCAxN0gxOEMxOC40MTcgMTcgMTguNzkgMTYuNzQxIDE4LjkzNyAxNi4zNTJMMjEuOTM3IDguMzUyQzIyLjA1MiA4LjA0NCAyMi4wMDkgNy43IDIxLjgyMiA3LjQzMVonIGZpbGw9JyMxNjE2MTYnLz4KPHBhdGggZD0nTTEwLjUgMjFDMTEuMzI4NCAyMSAxMiAyMC4zMjg0IDEyIDE5LjVDMTIgMTguNjcxNiAxMS4zMjg0IDE4IDEwLjUgMThDOS42NzE1NyAxOCA5IDE4LjY3MTYgOSAxOS41QzkgMjAuMzI4NCA5LjY3MTU3IDIxIDEwLjUgMjFaJyBmaWxsPScjMTYxNjE2Jy8+CjxwYXRoIGQ9J00xNy41IDIxQzE4LjMyODQgMjEgMTkgMjAuMzI4NCAxOSAxOS41QzE5IDE4LjY3MTYgMTguMzI4NCAxOCAxNy41IDE4QzE2LjY3MTYgMTggMTYgMTguNjcxNiAxNiAxOS41QzE2IDIwLjMyODQgMTYuNjcxNiAyMSAxNy41IDIxWicgZmlsbD0nIzE2MTYxNicvPgo8L3N2Zz4K"
                className="desks-image1"
              />
              <img
                alt="iconsbxsheartcircle3271300"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDJDNi40ODYgMiAyIDYuNDg2IDIgMTJDMiAxNy41MTQgNi40ODYgMjIgMTIgMjJDMTcuNTE0IDIyIDIyIDE3LjUxNCAyMiAxMkMyMiA2LjQ4NiAxNy41MTQgMiAxMiAyWk0xNi4xODYgMTIuNzRMMTIgMTYuOTI2TDcuODE0IDEyLjc0QzYuNzI1IDExLjY1MiA2LjcyNSA5LjkyNyA3LjgxNCA4LjgzM0M4LjkwOCA3Ljc0NSAxMC42MzIgNy43NDUgMTEuNzIgOC44MzNMMTIgOS4xMTJMMTIuMjc5IDguODMzQzEzLjM2NyA3Ljc0NSAxNS4wOTIgNy43NDUgMTYuMTg1IDguODMzQzE3LjI3NCA5LjkyNyAxNy4yNzQgMTEuNjUxIDE2LjE4NiAxMi43NFonIGZpbGw9JyMxNjE2MTYnLz4KPC9zdmc+Cg=="
                className="desks-image2"
              />
              <img
                alt="AccountCircle3271301"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyQzIgMTcuNTIgNi40OCAyMiAxMiAyMkMxNy41MiAyMiAyMiAxNy41MiAyMiAxMkMyMiA2LjQ4IDE3LjUyIDIgMTIgMlpNMTIgNUMxMy42NiA1IDE1IDYuMzQgMTUgOEMxNSA5LjY2IDEzLjY2IDExIDEyIDExQzEwLjM0IDExIDkgOS42NiA5IDhDOSA2LjM0IDEwLjM0IDUgMTIgNVpNMTIgMTkuMkM5LjUgMTkuMiA3LjI5IDE3LjkyIDYgMTUuOThDNi4wMyAxMy45OSAxMCAxMi45IDEyIDEyLjlDMTMuOTkgMTIuOSAxNy45NyAxMy45OSAxOCAxNS45OEMxNi43MSAxNy45MiAxNC41IDE5LjIgMTIgMTkuMlonIGZpbGw9JyMxNjE2MTYnLz4KPC9zdmc+Cg=="
                className="desks-image3"
              />
            </div>
          </div>
          <div data-role="BurgerMenu" className="desks-burger-menu">
            <svg viewBox="0 0 1024 1024" className="desks-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="desks-mobile-menu">
            <div className="desks-nav">
              <div className="desks-container02">
                <span className="desks-logo-center1">MOBILLIO</span>
                <div
                  data-role="CloseMobileMenu"
                  className="desks-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="desks-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="desks-middle1">
                <span className="desks-text">SHOP</span>
                <span className="desks-text01">LOOKBOOK</span>
                <span className="desks-text02">SPECIAL</span>
                <span className="desks-text03">ABOUT</span>
                <span className="desks-text04">BLOG</span>
                <span className="desks-text05">CONTACT</span>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="desks-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="desks-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="desks-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div id="desks" className="section-container">
        <div className="max-width-container">
          <SectionHeading
            heading="Desks"
            subtitle="Discover the perfect desk for your workspace with our diverse selection of desks for sale."
            rootClassName="section-heading-root-class-name1"
          ></SectionHeading>
          <div className="desks-gallery">
            <div className="desks-left1">
              <div className="desks-gallery-card">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1618939979282-e8d213b2bb0d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxEZXNrc3xlbnwwfHx8fDE3MDA4OTI4OTV8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                  className="desks-image4"
                />
                <div className="desks-container03">
                  <h3 className="desks-text06">White Standing Desk</h3>
                  <div className="desks-container04">
                    <svg viewBox="0 0 1024 1024" className="desks-icon10">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="desks-icon12">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="desks-icon14">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="desks-icon16">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="desks-icon18">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                  </div>
                  <div className="desks-container05">
                    <span className="desks-currency">₱</span>
                    <span className="desks-value">559</span>
                  </div>
                </div>
              </div>
              <svg viewBox="0 0 1024 1024" className="desks-icon20">
                <path d="M306 630q0 10 10 10h494v86h-512q-34 0-59-26t-25-60q0-20 10-40l58-106-154-324h-86v-84h140q40 84 80 170 10 18 46 95t56 119h300q150-272 164-300l74 42-164 298q-24 44-74 44h-318l-38 70zM726 768q34 0 59 26t25 60-25 59-59 25-60-25-26-59 26-60 60-26zM298 768q34 0 60 26t26 60-26 59-60 25-59-25-25-59 25-60 59-26zM470 384v-128h-128v-86h128v-128h84v128h128v86h-128v128h-84z"></path>
              </svg>
            </div>
            <div className="desks-right1">
              <div className="desks-top">
                <div className="desks-left2">
                  <ItemCard
                    name="Wooden Standing Desk"
                    value="2642"
                    currency="₱"
                    image_src="https://images.unsplash.com/photo-1598016677484-ad34c3fd766e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDUxfHxkZXNrc3xlbnwwfHx8fDE3MDA4OTM2MTN8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                    rootClassName="rootClassName18"
                  ></ItemCard>
                  <svg viewBox="0 0 1024 1024" className="desks-icon22">
                    <path d="M306 630q0 10 10 10h494v86h-512q-34 0-59-26t-25-60q0-20 10-40l58-106-154-324h-86v-84h140q40 84 80 170 10 18 46 95t56 119h300q150-272 164-300l74 42-164 298q-24 44-74 44h-318l-38 70zM726 768q34 0 59 26t25 60-25 59-59 25-60-25-26-59 26-60 60-26zM298 768q34 0 60 26t26 60-26 59-60 25-59-25-25-59 25-60 59-26zM470 384v-128h-128v-86h128v-128h84v128h128v86h-128v128h-84z"></path>
                  </svg>
                </div>
                <div className="desks-right2">
                  <ItemCard
                    name="Stylish White Desk"
                    value="2990"
                    currency="₱"
                    image_src="https://images.unsplash.com/photo-1476365518243-f738bf58443d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY4fHxkZXNrc3xlbnwwfHx8fDE3MDA4OTM2MTN8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                    rootClassName="rootClassName19"
                  ></ItemCard>
                  <svg viewBox="0 0 1024 1024" className="desks-icon24">
                    <path d="M306 630q0 10 10 10h494v86h-512q-34 0-59-26t-25-60q0-20 10-40l58-106-154-324h-86v-84h140q40 84 80 170 10 18 46 95t56 119h300q150-272 164-300l74 42-164 298q-24 44-74 44h-318l-38 70zM726 768q34 0 59 26t25 60-25 59-59 25-60-25-26-59 26-60 60-26zM298 768q34 0 60 26t26 60-26 59-60 25-59-25-25-59 25-60 59-26zM470 384v-128h-128v-86h128v-128h84v128h128v86h-128v128h-84z"></path>
                  </svg>
                </div>
              </div>
              <div className="desks-bottom">
                <div className="desks-left3">
                  <ItemCard
                    name="Side Table"
                    value="2400"
                    currency="₱"
                    image_src="https://images.unsplash.com/photo-1486946255434-2466348c2166?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDcyfHxkZXNrc3xlbnwwfHx8fDE3MDA4OTM2MTN8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                    rootClassName="item-card-root-class-name20"
                  ></ItemCard>
                  <svg viewBox="0 0 1024 1024" className="desks-icon26">
                    <path d="M306 630q0 10 10 10h494v86h-512q-34 0-59-26t-25-60q0-20 10-40l58-106-154-324h-86v-84h140q40 84 80 170 10 18 46 95t56 119h300q150-272 164-300l74 42-164 298q-24 44-74 44h-318l-38 70zM726 768q34 0 59 26t25 60-25 59-59 25-60-25-26-59 26-60 60-26zM298 768q34 0 60 26t26 60-26 59-60 25-59-25-25-59 25-60 59-26zM470 384v-128h-128v-86h128v-128h84v128h128v86h-128v128h-84z"></path>
                  </svg>
                </div>
                <div className="desks-right3">
                  <ItemCard
                    name="Gray Minimalist Desk"
                    value="4900"
                    currency="₱"
                    image_src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDgxfHxkZXNrc3xlbnwwfHx8fDE3MDA4OTM2Nzh8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                    rootClassName="item-card-root-class-name21"
                  ></ItemCard>
                  <svg viewBox="0 0 1024 1024" className="desks-icon28">
                    <path d="M306 630q0 10 10 10h494v86h-512q-34 0-59-26t-25-60q0-20 10-40l58-106-154-324h-86v-84h140q40 84 80 170 10 18 46 95t56 119h300q150-272 164-300l74 42-164 298q-24 44-74 44h-318l-38 70zM726 768q34 0 59 26t25 60-25 59-59 25-60-25-26-59 26-60 60-26zM298 768q34 0 60 26t26 60-26 59-60 25-59-25-25-59 25-60 59-26zM470 384v-128h-128v-86h128v-128h84v128h128v86h-128v128h-84z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="desks-footer">
        <div className="max-width-container">
          <footer className="desks-footer1">
            <div className="desks-container06">
              <h3 id="contact" className="desks-text07 Heading-3">
                DYUWANI
              </h3>
              <span className="desks-text08">
                Blk 25 Lot 18 Carmona Estate Phase 6 Carmona Cavite
              </span>
              <span className="desks-text09">+63 927 366 5702</span>
              <span className="desks-text10">dyuwani.flix@gmail.com</span>
            </div>
            <div className="desks-links-container">
              <div className="desks-container07">
                <span className="desks-text11">Categories</span>
                <span className="desks-text12">Collections</span>
                <span className="desks-text13">Desks</span>
                <span className="desks-text14">Furniture</span>
                <span className="desks-text15">Lamps</span>
                <span className="desks-text16">Plants</span>
                <span className="desks-text17">Decoration</span>
              </div>
              <div className="desks-container08">
                <span className="desks-text18">Company</span>
                <a href="#categories" className="desks-link">
                  Shop
                </a>
                <a href="#blog" className="desks-link1">
                  Lookbook
                </a>
                <a href="#trending_items" className="desks-link2">
                  Specials
                </a>
                <a href="#about" className="desks-link3">
                  About
                </a>
                <a href="#blog" className="desks-link4">
                  Blog
                </a>
              </div>
              <div className="desks-container09">
                <span className="desks-text19">Resources</span>
                <span className="desks-text20">Contact us</span>
                <span className="desks-text21">Order</span>
                <span className="desks-text22">Track your order</span>
                <span className="desks-text23">Shipping &amp; Delivery</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Desks
