import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <div className="background-cover" />
        <div className="put-wrap-pop">
        </div>
        <div className="panel-pop panel-pop-login" id="wpqa-question" data-width={690}>
          <i className="icon-cancel" />
          <div className="panel-pop-content">
            <div className="alert-message error"><i className="icon-cancel" />
              <p>Sorry, you do not have permission to ask a question. </p>
            </div>
          </div>
        </div>
        <div className="panel-pop panel-pop-login" id="wpqa-report">
          <i className="icon-cancel" />
          <div className="panel-pop-content">
            <p className="question_report">Please briefly explain why you feel this question should be reported.</p>
            <p className="wpqa_hide answer_report">Please briefly explain why you feel this answer should be reported.</p>
            <p className="wpqa_hide user_report">Please briefly explain why you feel this user should be reported.</p>
            <form className="wpqa_form submit-report" method="post">
              <div className="wpqa_error" />
              <div className="wpqa_success" />
              <div className="form-inputs clearfix">
                <p className="login-text">
                  <label htmlFor="explain-reported">Explain<span className="required">*</span></label>
                  <textarea cols={58} rows={8} className="form-control" id="explain-reported" name="explain" defaultValue={""} />
                  <i className="icon-pencil" />
                </p>
              </div>
              <p className="form-submit mb-0">
                <span className="load_span"><span className="loader_2" /></span>
                <input type="hidden" id="wpqa_report_nonce" name="wpqa_report_nonce" defaultValue="1257bdb1c1" /> <input type="submit" defaultValue="Report" className="button-default button-hide-click" />
              </p>
              <input type="hidden" name="form_type" defaultValue="wpqa-report" />
              <input type="hidden" name="post_id" defaultValue={64} />
            </form>
          </div>
        </div>
        <div id="wrap" className="wrap-login">
          <div className="hidden-header header-dark mobile_bar_active">
            <header className="header" itemScope itemType="https://schema.org/WPHeader">
              <div className="the-main-container">
                <div className="mobile-menu">
                  <div className="mobile-menu-click" data-menu="mobile-menu-main">
                    <i className="icon-menu" />
                  </div>
                </div>
                <div className="right-header float_r">
                  <div className="user-login-area">
                    <div className="notifications-area user-notifications float_r">
                      <span className="notifications-click" />
                      <i className="icon-bell" />
                      <div>
                        <ul>
                          <li className="notifications__item d-flex align-items-center justify-content-center">
                            <div className="notification__body">There are no notifications yet.</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="user-login-click float_r">
                      <span className="user-click" />
                      <div className="user-image float_l">
                        <img className="avatar avatar-29 photo" alt="abdullah511" title="abdullah511" width={29} height={29} srcSet="https://secure.gravatar.com/avatar/c91f88146c4458d5560afc538ad65956?s=96&d=mm&r=g 1x, https://secure.gravatar.com/avatar/c91f88146c4458d5560afc538ad65956?s=96&d=mm&r=g 2x" src="c91f88146c4458d5560afc538ad65956.jpeg" />
                      </div>
                      <div className="user-login float_l">
                        <span>Welcome</span><br />
                        <div className="float_l">abdullah511</div>
                      </div>
                      <i className="icon-down-open-mini" />
                      <ul>
                        <li><a href="https://2code.info/demo/themes/Discy/Main/profile/abdullah511/"><i className="icon-user" />User Profile</a></li>
                        <li><a href="https://2code.info/demo/themes/Discy/Main/profile/abdullah511/edit/"><i className="icon-pencil" />Edit Profile</a></li>
                        <li>
                          <a href="https://2code.info/demo/themes/Discy/Main/profile/abdullah511/messages/">
                            <i className="icon-mail" />Messages </a>
                        </li>
                        <li><a href="https://2code.info/demo/themes/Discy/Main/profile/abdullah511/groups/"><i className="icon-network" />Groups</a></li>
                        <li><a href="https://2code.info/demo/themes/Discy/Main/profile/abdullah511/referrals/"><i className="icon-user-add" />Referrals</a></li>
                        <li><a href="https://2code.info/demo/themes/Discy/Main/profile/abdullah511/asked-questions/"><i className="icon-sound" />Asked Questions</a></li>
                        <li><a href="https://2code.info/demo/themes/Discy/Main/profile/abdullah511/best-answers/"><i className="icon-graduation-cap" />Best Answers</a></li>
                        <li><a href="https://2code.info/demo/themes/Discy/Main/profile/abdullah511/points/"><i className="icon-bucket" />Points</a></li>
                        <li><a href="https://2code.info/demo/themes/Discy/Main/profile/abdullah511/activities/"><i className="icon-chart-line" />Activity Log</a></li>
                        <li><a href="https://2code.info/demo/themes/Discy/Main/wp-login.php?action=logout&redirect_to=https%3A%2F%2F2code.info%2Fdemo%2Fthemes%2FDiscy%2FMain%2F&_wpnonce=4c0240aeb8"><i className="icon-logout" />Log out</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="left-header float_l">
                  <h2 className="screen-reader-text site_logo">Discy</h2>
                  <a className="logo float_l logo-img" href="https://2code.info/demo/themes/Discy/Main/" title="Discy">
                    <img title="Discy" height={45} width={137} className="default_screen" alt="Discy Logo" src="logo.png" />
                    <img title="Discy" height={45} width={137} className="retina_screen" alt="Discy Logo" src="logo-2x.png" />
                  </a>
                  <div className="mid-header float_l">
                    <div className="header-search float_r">
                      <form role="search" className="searchform main-search-form" method="get" action="https://2code.info/demo/themes/Discy/Main/search/">
                        <div className="search-wrapper">
                          <input type="search" className="live-search live-search-icon" autoComplete="off" placeholder="Type Search Words" name="search" defaultValue />
                          <div className="loader_2 search_loader" />
                          <div className="search-results results-empty" />
                          <input type="hidden" name="search_type" className="search_type" defaultValue="questions" />
                          <div className="search-click" />
                          <button type="submit"><i className="icon-search" /></button>
                        </div>
                      </form>
                    </div>
                    <nav className="nav float_l" itemScope itemType="https://schema.org/SiteNavigationElement">
                      <h3 className="screen-reader-text">Discy Navigation</h3>
                      <ul id="menu-header-login" className="menu">
                        <li id="menu-item-80" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-64 current_page_item menu-item-80">
                          <a className href="https://2code.info/demo/themes/Discy/Main/">Home</a>
                        </li>
                        <li id="menu-item-81" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-81"><a className href="https://2code.info/demo/themes/Discy/Main/about-us/">About
                          Us</a></li>
                        <li id="menu-item-82" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-82"><a className href="https://2code.info/demo/themes/Discy/Main/blog/">Blog</a>
                        </li>
                        <li id="menu-item-84" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-84"><a className href="https://2code.info/demo/themes/Discy/Main/contact-us/">Contact Us</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </header>
            <div className="mobile-bar main-mobile-bar">
              <div className="the-main-container">
                <div className="mobile-bar-content">
                  <div className="the-main-container">
                    <div className="mobile-bar-search">
                      <a href="https://2code.info/demo/themes/Discy/Main/search/"><i className="icon-search" />Search</a>
                      <form role="search" method="get" className="searchform main-search-form" action="https://2code.info/demo/themes/Discy/Main/search/">
                        <i className="icon-left-open" />
                        <input type="search" className="live-search" autoComplete="off" name="search" defaultValue="Hit enter to search" />
                        <div className="loader_2 search_loader" />
                        <div className="search-results results-empty" />
                        <input type="hidden" name="search_type" className="search_type" defaultValue="questions" />
                      </form>
                    </div>
                    <div className="mobile-bar-ask">
                      <a target="_self" className="wpqa-question btn btn-danger" href>
                        <i className="icon-help-circled" />Ask A Question</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <aside className="mobile-aside mobile-menu-main mobile-menu-wrap gray-mobile-menu" data-menu="mobile-menu-main">
            <h3 className="screen-reader-text">Mobile menu</h3>
            <div className="mobile-aside-inner">
              <div className="mobile-aside-inner-inner">
                <a href="https://2code.info/demo/themes/Discy/Main/#" className="mobile-aside-close"><i className="icon-cancel" /><span className="screen-reader-text">Close</span></a>
                <div className="mobile-menu-top mobile--top">
                  <div className="widget widget_ask">
                    <a href="https://2code.info/demo/themes/Discy/Main/add-question/" className="button-default wpqa-question">Ask a Question</a>
                  </div>
                </div>
                <ul id="nav_menu" className="menu">
                  <li id="menu-item-90" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-64 current_page_item menu-item-90">
                    <a className href="https://2code.info/demo/themes/Discy/Main/"><i className="icon-home" />Home</a>
                  </li>
                  <li id="menu-item-170" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-170"><a className href="https://2code.info/demo/themes/Discy/Main/questions-feed/"><i className="icon-newspaper" />Feed</a></li>
                  <li id="menu-item-91" className="wpqa-menu wpqa-profile-nav menu-item menu-item-type-custom menu-item-object-custom menu-item-91 li-profile">
                    <a className href="https://2code.info/demo/themes/Discy/Main/profile/abdullah511/"><i className="icon-vcard" />User Profile</a>
                  </li>
                  <li id="menu-item-93" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-93"><a className href="https://2code.info/demo/themes/Discy/Main/communities/"><i className="icon-folder" />Communities</a></li>
                  <li id="menu-item-94" className="nav_menu_open menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-94">
                    <a className href="https://2code.info/demo/themes/Discy/Main/questions/"><i className="icon-book-open" />Questions</a>
                    <ul className="sub-menu">
                      <li id="menu-item-95" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-95"><a className href="https://2code.info/demo/themes/Discy/Main/?show=recent-questions">New
                        Questions</a></li>
                      <li id="menu-item-96" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-96"><a className href="https://2code.info/demo/themes/Discy/Main/?show=most-voted">Trending
                        Questions</a></li>
                      <li id="menu-item-97" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-97"><a className href="https://2code.info/demo/themes/Discy/Main/?show=most-visited">Must read
                        Questions</a></li>
                      <li id="menu-item-98" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-98"><a className href="https://2code.info/demo/themes/Discy/Main/?show=most-answered">Hot
                        Questions</a></li>
                    </ul>
                    <span className="mobile-arrows"><i className="icon-down-open" /></span>
                  </li>
                  <li id="menu-item-126" className="wpqa-menu wpqa-poll-nav menu-item menu-item-type-custom menu-item-object-custom menu-item-126 li-poll">
                    <a className href="https://2code.info/demo/themes/Discy/Main/questions/?type=poll"><i className="icon-megaphone" />Polls</a>
                  </li>
                  <li id="menu-item-178" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-178"><a className href="https://2code.info/demo/themes/Discy/Main/groups-page/"><i className="icon-globe" />Groups</a></li>
                  <li id="menu-item-177" className="wpqa-menu wpqa-add-group-nav menu-item menu-item-type-custom menu-item-object-custom menu-item-177 li-add-group">
                    <a className href="https://2code.info/demo/themes/Discy/Main/add-group/"><i className="icon-network" />Add group</a>
                  </li>
                  <li id="menu-item-100" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-100"><a className href="https://2code.info/demo/themes/Discy/Main/tags/"><i className="icon-tag" />Tags</a>
                  </li>
                  <li id="menu-item-102" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-102"><a className href="https://2code.info/demo/themes/Discy/Main/badges/"><i className="icon-trophy" />Badges</a></li>
                  <li id="menu-item-173" className="wpqa-menu wpqa-buy-points-nav menu-item menu-item-type-custom menu-item-object-custom menu-item-173 li-buy-points">
                    <a className href="https://2code.info/demo/themes/Discy/Main/buy-points/"><i className="icon-star" />Buy Points</a>
                  </li>
                  <li id="menu-item-101" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-101"><a className href="https://2code.info/demo/themes/Discy/Main/users/"><i className="icon-users" />Users</a></li>
                  <li id="menu-item-103" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-103"><a className href="https://2code.info/demo/themes/Discy/Main/faqs/"><i className="icon-lifebuoy" />Help</a></li>
                  <li id="menu-item-172" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-172"><a className target="_blank" href="https://1.envato.market/drV57"><i className="icon-basket" />Buy
                    Theme</a></li>
                </ul>
                <div className="mobile--top post-search">
                  <form role="search" method="get" className="searchform main-search-form" action="https://2code.info/demo/themes/Discy/Main/search/">
                    <div className="row row-warp">
                      <div className="col col10">
                        <input type="search" className="live-search" autoComplete="off" name="search" defaultValue="Hit enter to search" />
                        <div className="loader_2 search_loader" />
                        <div className="search-results results-empty" />
                        <input type="hidden" name="search_type" className="search_type" defaultValue="questions" />
                      </div>
                      <div className="wpqa_form col col2">
                        <input type="submit" className="button-default" defaultValue="Search" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </aside>
          <div className="main-content" style={{ minHeight: 'calc(100vh - 488px)' }}>
            <div className="discy-inner-content menu_sidebar" style={{ minHeight: 'calc(100vh - 488px)' }}>
              <div className="the-main-container the-wrap-container" style={{ minHeight: 'calc(100vh - 488px)' }}>
                <main className="all-main-wrap discy-site-content float_l" style={{ position: 'relative', overflow: 'visible', boxSizing: 'border-box', minHeight: 1 }}>
                  <div className="theiaStickySidebar" style={{ paddingTop: 0, paddingBottom: 1, position: 'static' }}>
                    <div className="the-main-inner float_l">
                      <div className="alert-message warning"><i className="icon-flag" />
                        <p>A confirmation mail has been sent to your registered email account, If you have
                          not received the confirmation mail, kindly <a href="https://2code.info/demo/themes/Discy/Main/?get_activate=do"> Click
                            here </a> to re-send another confirmation mail.</p>
                      </div>
                      <div className="clearfix" />
                      <div id="row-tabs-home" className="row row-warp row-tabs">
                        <div className="col col12">
                          <div className="wrap-tabs">
                            <div className="menu-tabs active-menu">
                              <ul className="menu flex menu-tabs-desktop">
                                <li className="active-tab">
                                  <a href="https://2code.info/demo/themes/Discy/Main/?show=recent-questions">
                                    Recent Questions </a>
                                </li>
                                <li>
                                  <a href="https://2code.info/demo/themes/Discy/Main/?show=most-answered">
                                    Most Answered </a>
                                </li>
                                <li>
                                  <a href="https://2code.info/demo/themes/Discy/Main/?show=question-bump">
                                    Bump Question </a>
                                </li>
                                <li>
                                  <a href="https://2code.info/demo/themes/Discy/Main/?show=answers">
                                    Answers </a>
                                </li>
                                <li>
                                  <a href="https://2code.info/demo/themes/Discy/Main/?show=most-visited">
                                    Most Visited </a>
                                </li>
                                <li className="flexMenu-viewMore"><a href="https://2code.info/demo/themes/Discy/Main/#" title><i className="icon-dot-3" /></a>
                                  <ul className="flexMenu-popup" style={{ display: 'none', position: 'absolute' }}>
                                    <li>
                                      <a href="https://2code.info/demo/themes/Discy/Main/?show=most-voted">
                                        Most Voted </a>
                                    </li>
                                    <li>
                                      <a href="https://2code.info/demo/themes/Discy/Main/?show=no-answers">
                                        No Answers </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="discy_hide mobile-tabs"><span className="styled-select"><select className="home_categories">
                                <option selected="selected" value="https://2code.info/demo/themes/Discy/Main/?show=recent-questions">
                                  Recent Questions </option>
                                <option value="https://2code.info/demo/themes/Discy/Main/?show=most-answered">
                                  Most Answered </option>
                                <option value="https://2code.info/demo/themes/Discy/Main/?show=question-bump">
                                  Bump Question </option>
                                <option value="https://2code.info/demo/themes/Discy/Main/?show=answers">
                                  Answers </option>
                                <option value="https://2code.info/demo/themes/Discy/Main/?show=most-visited">
                                  Most Visited </option>
                                <option value="https://2code.info/demo/themes/Discy/Main/?show=most-voted">
                                  Most Voted </option>
                                <option value="https://2code.info/demo/themes/Discy/Main/?show=no-answers">
                                  No Answers </option>
                              </select></span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <section>
                        <h2 className="screen-reader-text">Discy Latest Questions</h2>
                        <div className="post-articles question-articles">
                          <article id="post-118" className="article-question article-post clearfix question-answer-before question-vote-inside question-with-comments answer-question-not-jquery question-vote-image discoura-not-credential question-type-normal post-118 question type-question status-publish hentry question-category-language question_tags-english question_tags-language">
                            <div className="question-sticky-ribbon">
                              <div>Pinned</div>
                            </div>
                            <div className="single-inner-content">
                              <div className="question-inner">
                                <div className="question-image-vote">
                                  <div className="author-image author__avatar author-image-42"><a href="https://2code.info/demo/themes/Discy/Main/profile/martin/"><span className="author-image-span"><img className="avatar avatar-42 photo" alt="Martin Hope" title="Martin Hope" width={42} height={42} srcSet="https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-2-42x42.jpg 1x, https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-2-84x84.jpg 2x" src="team-2-42x42.jpg" /></span></a>
                                    <div className="author-image-pop-2 member-card" data-user={6}>
                                      <div className="author-pop-loader">
                                        <div className="loader_2" />
                                      </div>
                                    </div>
                                  </div>
                                  <ul className="question-vote question-mobile">
                                    <li className="question-vote-up"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_up-118" data-type="question" data-vote-type="up" className="wpqa_vote question_vote_up vote_allow" title="Like"><i className="icon-up-dir" /></a></li>
                                    <li className="vote_result">807</li>
                                    <li className="li_loader"><span className="loader_3 fa-spin" />
                                    </li>
                                    <li className="question-vote-down"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_down-118" data-type="question" data-vote-type="down" className="wpqa_vote question_vote_down vote_allow" title="Dislike"><i className="icon-down-dir" /></a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="question-content question-content-first">
                                  <header className="article-header">
                                    <div className="question-header">
                                      <a className="post-author" href="https://2code.info/demo/themes/Discy/Main/profile/martin/">Martin
                                        Hope</a><span className="badge-span" style={{ backgroundColor: '#d9a34a' }}>Enlightened</span>
                                      <div className="post-meta">
                                        <span className="post-date">Asked:<span className="date-separator" /> <a href="https://2code.info/demo/themes/Discy/Main/question/is-this-statement-i-see-him-last-night-can-be-understood-as-i-saw-him-last-night/"><span className="entry-date published">April 19,
                                          2018</span></a></span><span className="byline"><span className="post-cat">In: <a href="https://2code.info/demo/themes/Discy/Main/question-category/language/" rel="tag">Language</a></span></span>
                                      </div>
                                    </div>
                                  </header>
                                  <div>
                                    <h2 className="post-title"><a className="post-title" href="https://2code.info/demo/themes/Discy/Main/question/is-this-statement-i-see-him-last-night-can-be-understood-as-i-saw-him-last-night/" rel="bookmark">Is this statement, “i see him last
                                      night” can be understood as “I saw him last
                                      night”?</a></h2>
                                  </div>
                                </div>
                                <div className="question-not-mobile question-image-vote question-vote-sticky">
                                  <div className="question-sticky-stop">
                                    <ul className="question-vote">
                                      <li className="question-vote-up"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_up-118" data-type="question" data-vote-type="up" className="wpqa_vote question_vote_up vote_allow" title="Like"><i className="icon-up-dir" /></a>
                                      </li>
                                      <li className="vote_result">807</li>
                                      <li className="li_loader"><span className="loader_3 fa-spin" /></li>
                                      <li className="question-vote-down"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_down-118" data-type="question" data-vote-type="down" className="wpqa_vote question_vote_down vote_allow" title="Dislike"><i className="icon-down-dir" /></a></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="question-content question-content-second">
                                  <div className="post-wrap-content">
                                    <div className="question-content-text">
                                      <div className="all_not_single_post_content">
                                        <p className="excerpt-question">In my local language
                                          (Bahasa Indonesia) there are no verb-2 or past
                                          tense form as time tracker. So, I often forget
                                          to use the past form of verb when speaking
                                          english.
                                          I saw him last night (correct)
                                          I see him last night ...</p>
                                      </div>
                                    </div>
                                    <div className="tagcloud">
                                      <div className="question-tags"><i className="icon-tags" /><a href="https://2code.info/demo/themes/Discy/Main/question-tag/english/">english</a><a href="https://2code.info/demo/themes/Discy/Main/question-tag/language/">language</a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="wpqa_error" />
                                  <div className="wpqa_success" />
                                  <footer className="question-footer">
                                    <ul className="footer-meta">
                                      <li className="best-answer-meta"><a href="https://2code.info/demo/themes/Discy/Main/question/is-this-statement-i-see-him-last-night-can-be-understood-as-i-saw-him-last-night/#comments"><i className="icon-comment" /> <span className="question-span">2 Answers</span></a>
                                      </li>
                                      <li className="view-stats-meta"><i className="icon-eye" />17k
                                        <span className="question-span">Views</span>
                                      </li>
                                    </ul>
                                    <a className="meta-answer meta-answer-a" href="https://2code.info/demo/themes/Discy/Main/question/is-this-statement-i-see-him-last-night-can-be-understood-as-i-saw-him-last-night/#respond">Answer</a>
                                  </footer>
                                </div>
                                <div className="clearfix" />
                              </div>
                            </div>
                          </article>
                          <article id="post-120" className="article-question article-post clearfix question-answer-before question-vote-inside question-with-comments answer-question-not-jquery question-vote-image discoura-not-credential question-type-normal post-120 question type-question status-publish hentry question-category-language question_tags-english">
                            <div className="single-inner-content">
                              <div className="question-inner">
                                <div className="question-image-vote">
                                  <div className="author-image author__avatar author-image-42"><a href="https://2code.info/demo/themes/Discy/Main/profile/ahmed/"><span className="author-image-span"><img className="avatar avatar-42 photo" alt="Ahmed Hassan" title="Ahmed Hassan" width={42} height={42} srcSet="https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-7-42x42.jpg 1x, https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-7-84x84.jpg 2x" src="team-7-42x42.jpg" /></span></a>
                                    <div className="author-image-pop-2 member-card" data-user={1}>
                                      <div className="author-pop-loader">
                                        <div className="loader_2" />
                                      </div>
                                    </div>
                                  </div>
                                  <ul className="question-vote question-mobile">
                                    <li className="question-vote-up"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_up-120" data-type="question" data-vote-type="up" className="wpqa_vote question_vote_up vote_allow" title="Like"><i className="icon-up-dir" /></a></li>
                                    <li className="vote_result">316</li>
                                    <li className="li_loader"><span className="loader_3 fa-spin" />
                                    </li>
                                    <li className="question-vote-down"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_down-120" data-type="question" data-vote-type="down" className="wpqa_vote question_vote_down vote_allow" title="Dislike"><i className="icon-down-dir" /></a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="question-content question-content-first">
                                  <header className="article-header">
                                    <div className="question-header">
                                      <a className="post-author" href="https://2code.info/demo/themes/Discy/Main/profile/ahmed/">Ahmed
                                        Hassan</a><span className="verified_user tooltip-n" original-title="Verified"><i className="icon-check" /></span><span className="badge-span" style={{ backgroundColor: '#d9a34a' }}>Enlightened</span>
                                      <div className="post-meta">
                                        <span className="post-date">Asked:<span className="date-separator" /> <a href="https://2code.info/demo/themes/Discy/Main/question/how-do-native-speakers-tell-im-foreign-based-on-my-english-alone/"><span className="entry-date published">April 19,
                                          2018</span></a></span><span className="byline"><span className="post-cat">In: <a href="https://2code.info/demo/themes/Discy/Main/question-category/language/" rel="tag">Language</a></span></span>
                                      </div>
                                    </div>
                                  </header>
                                  <div>
                                    <h2 className="post-title"><a className="post-title" href="https://2code.info/demo/themes/Discy/Main/question/how-do-native-speakers-tell-im-foreign-based-on-my-english-alone/" rel="bookmark">How do native speakers tell I’m
                                      foreign based on my English alone?</a></h2>
                                  </div>
                                </div>
                                <div className="question-not-mobile question-image-vote question-vote-sticky">
                                  <div className="question-sticky-stop">
                                    <ul className="question-vote">
                                      <li className="question-vote-up"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_up-120" data-type="question" data-vote-type="up" className="wpqa_vote question_vote_up vote_allow" title="Like"><i className="icon-up-dir" /></a>
                                      </li>
                                      <li className="vote_result">316</li>
                                      <li className="li_loader"><span className="loader_3 fa-spin" /></li>
                                      <li className="question-vote-down"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_down-120" data-type="question" data-vote-type="down" className="wpqa_vote question_vote_down vote_allow" title="Dislike"><i className="icon-down-dir" /></a></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="question-content question-content-second">
                                  <div className="post-wrap-content">
                                    <div className="question-content-text">
                                      <div className="all_not_single_post_content">
                                        <p className="excerpt-question">I’m a 19-year-old
                                          student from Malaysia. I’ve been introduced to
                                          the language at a very young age and I’m capable
                                          of conducting any type of conversation. However,
                                          some of my English-speaking friends on the
                                          internet didn’t take too long to ...</p>
                                      </div>
                                    </div>
                                    <div className="tagcloud">
                                      <div className="question-tags"><i className="icon-tags" /><a href="https://2code.info/demo/themes/Discy/Main/question-tag/english/">english</a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="wpqa_error" />
                                  <div className="wpqa_success" />
                                  <footer className="question-footer">
                                    <ul className="footer-meta">
                                      <li className="best-answer-meta"><a href="https://2code.info/demo/themes/Discy/Main/question/how-do-native-speakers-tell-im-foreign-based-on-my-english-alone/#comments"><i className="icon-comment" /> <span className="question-span">3 Answers</span></a>
                                      </li>
                                      <li className="view-stats-meta"><i className="icon-eye" />4k
                                        <span className="question-span">Views</span>
                                      </li>
                                    </ul>
                                    <a className="meta-answer meta-answer-a" href="https://2code.info/demo/themes/Discy/Main/question/how-do-native-speakers-tell-im-foreign-based-on-my-english-alone/#respond">Answer</a>
                                  </footer>
                                </div>
                                <div className="clearfix" />
                              </div>
                            </div>
                          </article>
                          <article id="post-119" className="article-question article-post clearfix question-answer-before question-vote-inside question-with-comments answer-question-not-jquery question-vote-image discoura-not-credential question-type-normal post-119 question type-question status-publish hentry question-category-language question_tags-british question_tags-english">
                            <div className="single-inner-content">
                              <div className="question-inner">
                                <div className="question-image-vote">
                                  <div className="author-image author__avatar author-image-42"><a href="https://2code.info/demo/themes/Discy/Main/profile/aaron/"><span className="author-image-span"><img className="avatar avatar-42 photo" alt="Aaron Aiken" title="Aaron Aiken" width={42} height={42} srcSet="https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2021/10/team-1-42x42.jpg 1x, https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2021/10/team-1-84x84.jpg 2x" src="team-1-42x42.jpg" /></span></a>
                                    <div className="author-image-pop-2 member-card" data-user={7}>
                                      <div className="author-pop-loader">
                                        <div className="loader_2" />
                                      </div>
                                    </div>
                                  </div>
                                  <ul className="question-vote question-mobile">
                                    <li className="question-vote-up"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_up-119" data-type="question" data-vote-type="up" className="wpqa_vote question_vote_up vote_allow" title="Like"><i className="icon-up-dir" /></a></li>
                                    <li className="vote_result">174</li>
                                    <li className="li_loader"><span className="loader_3 fa-spin" />
                                    </li>
                                    <li className="question-vote-down"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_down-119" data-type="question" data-vote-type="down" className="wpqa_vote question_vote_down vote_allow" title="Dislike"><i className="icon-down-dir" /></a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="question-content question-content-first">
                                  <header className="article-header">
                                    <div className="question-header">
                                      <a className="post-author" href="https://2code.info/demo/themes/Discy/Main/profile/aaron/">Aaron
                                        Aiken</a><span className="badge-span" style={{ backgroundColor: '#de2b2b' }}>Teacher</span>
                                      <div className="post-meta">
                                        <span className="post-date">Asked:<span className="date-separator" /> <a href="https://2code.info/demo/themes/Discy/Main/question/why-are-the-british-confused-about-us-calling-bread-rolls-biscuits-when-they-call-bread-rolls-puddings/"><span className="entry-date published">April 19,
                                          2018</span></a></span><span className="byline"><span className="post-cat">In: <a href="https://2code.info/demo/themes/Discy/Main/question-category/language/" rel="tag">Language</a></span></span>
                                      </div>
                                    </div>
                                  </header>
                                  <div>
                                    <h2 className="post-title"><a className="post-title" href="https://2code.info/demo/themes/Discy/Main/question/why-are-the-british-confused-about-us-calling-bread-rolls-biscuits-when-they-call-bread-rolls-puddings/" rel="bookmark">Why are the British confused about us
                                      calling bread rolls “biscuits” when they call bread
                                      rolls “puddings”?</a></h2>
                                  </div>
                                </div>
                                <div className="question-not-mobile question-image-vote question-vote-sticky">
                                  <div className="question-sticky-stop">
                                    <ul className="question-vote">
                                      <li className="question-vote-up"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_up-119" data-type="question" data-vote-type="up" className="wpqa_vote question_vote_up vote_allow" title="Like"><i className="icon-up-dir" /></a>
                                      </li>
                                      <li className="vote_result">174</li>
                                      <li className="li_loader"><span className="loader_3 fa-spin" /></li>
                                      <li className="question-vote-down"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_down-119" data-type="question" data-vote-type="down" className="wpqa_vote question_vote_down vote_allow" title="Dislike"><i className="icon-down-dir" /></a></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="question-content question-content-second">
                                  <div className="post-wrap-content">
                                    <div className="question-content-text">
                                      <div className="all_not_single_post_content">
                                        <p className="excerpt-question">(Why I darest say, they
                                          darest not get offended when they so indeed have
                                          examples that violate their own use and
                                          nomenclature!) IE: pudding as a specific
                                          dessert, puddings as a general term for
                                          desserts. Calling something a Yorkshire pudding
                                          ...</p>
                                      </div>
                                    </div>
                                    <div className="tagcloud">
                                      <div className="question-tags"><i className="icon-tags" /><a href="https://2code.info/demo/themes/Discy/Main/question-tag/british/">british</a><a href="https://2code.info/demo/themes/Discy/Main/question-tag/english/">english</a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="wpqa_error" />
                                  <div className="wpqa_success" />
                                  <footer className="question-footer">
                                    <ul className="footer-meta">
                                      <li className="best-answer-meta meta-best-answer"><a href="https://2code.info/demo/themes/Discy/Main/question/why-are-the-british-confused-about-us-calling-bread-rolls-biscuits-when-they-call-bread-rolls-puddings/#comments"><i className="icon-comment" /> <span className="question-span">6 Answers</span></a>
                                      </li>
                                      <li className="view-stats-meta"><i className="icon-eye" />3k
                                        <span className="question-span">Views</span>
                                      </li>
                                    </ul>
                                    <a className="meta-answer meta-answer-a" href="https://2code.info/demo/themes/Discy/Main/question/why-are-the-british-confused-about-us-calling-bread-rolls-biscuits-when-they-call-bread-rolls-puddings/#respond">Answer</a>
                                  </footer>
                                </div>
                                <div className="clearfix" />
                              </div>
                            </div>
                          </article>
                          <article id="post-117" className="article-question article-post clearfix question-answer-before question-vote-inside question-with-comments answer-question-not-jquery question-vote-image discoura-not-credential question-type-normal post-117 question type-question status-publish hentry question-category-analytics question_tags-analytics question_tags-google">
                            <div className="single-inner-content">
                              <div className="question-inner">
                                <div className="question-image-vote">
                                  <div className="author-image author__avatar author-image-42"><a href="https://2code.info/demo/themes/Discy/Main/profile/marko/"><span className="author-image-span"><img className="avatar avatar-42 photo" alt="Marko Smith" title="Marko Smith" width={42} height={42} srcSet="https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-4-42x42.jpg 1x, https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-4-84x84.jpg 2x" src="team-4-42x42.jpg" /></span></a>
                                    <div className="author-image-pop-2 member-card" data-user={5}>
                                      <div className="author-pop-loader">
                                        <div className="loader_2" />
                                      </div>
                                    </div>
                                  </div>
                                  <ul className="question-vote question-mobile">
                                    <li className="question-vote-up"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_up-117" data-type="question" data-vote-type="up" className="wpqa_vote question_vote_up vote_allow" title="Like"><i className="icon-up-dir" /></a></li>
                                    <li className="vote_result">71</li>
                                    <li className="li_loader"><span className="loader_3 fa-spin" />
                                    </li>
                                    <li className="question-vote-down"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_down-117" data-type="question" data-vote-type="down" className="wpqa_vote question_vote_down vote_allow" title="Dislike"><i className="icon-down-dir" /></a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="question-content question-content-first">
                                  <header className="article-header">
                                    <div className="question-header">
                                      <a className="post-author" href="https://2code.info/demo/themes/Discy/Main/profile/marko/">Marko
                                        Smith</a><span className="badge-span" style={{ backgroundColor: '#d9a34a' }}>Enlightened</span>
                                      <div className="post-meta">
                                        <span className="post-date">Asked:<span className="date-separator" /> <a href="https://2code.info/demo/themes/Discy/Main/question/google-analytics-reads-like-a-seismic-chart-lately/"><span className="entry-date published">April 19,
                                          2018</span></a></span><span className="byline"><span className="post-cat">In: <a href="https://2code.info/demo/themes/Discy/Main/question-category/analytics/" rel="tag">Analytics</a></span></span>
                                      </div>
                                    </div>
                                  </header>
                                  <div>
                                    <h2 className="post-title"><a className="post-title" href="https://2code.info/demo/themes/Discy/Main/question/google-analytics-reads-like-a-seismic-chart-lately/" rel="bookmark">Google Analytics reads like a seismic
                                      chart lately</a></h2>
                                  </div>
                                </div>
                                <div className="question-not-mobile question-image-vote question-vote-sticky">
                                  <div className="question-sticky-stop">
                                    <ul className="question-vote">
                                      <li className="question-vote-up"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_up-117" data-type="question" data-vote-type="up" className="wpqa_vote question_vote_up vote_allow" title="Like"><i className="icon-up-dir" /></a>
                                      </li>
                                      <li className="vote_result">71</li>
                                      <li className="li_loader"><span className="loader_3 fa-spin" /></li>
                                      <li className="question-vote-down"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_down-117" data-type="question" data-vote-type="down" className="wpqa_vote question_vote_down vote_allow" title="Dislike"><i className="icon-down-dir" /></a></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="question-content question-content-second">
                                  <div className="post-wrap-content">
                                    <div className="question-content-text">
                                      <div className="all_not_single_post_content">
                                        <p className="excerpt-question">Anyone else seeing
                                          dramatic ranking shakeups lately? Thankfully,
                                          this client is the blue line, but that’s a
                                          serious drop and recovery.
                                          We don’t operate at all in the black hat world,
                                          so our links and content should be in good
                                          shape. ...</p>
                                      </div>
                                    </div>
                                    <div className="tagcloud">
                                      <div className="question-tags"><i className="icon-tags" /><a href="https://2code.info/demo/themes/Discy/Main/question-tag/analytics/">analytics</a><a href="https://2code.info/demo/themes/Discy/Main/question-tag/google/">google</a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="wpqa_error" />
                                  <div className="wpqa_success" />
                                  <footer className="question-footer">
                                    <ul className="footer-meta">
                                      <li className="best-answer-meta"><a href="https://2code.info/demo/themes/Discy/Main/question/google-analytics-reads-like-a-seismic-chart-lately/#comments"><i className="icon-comment" /> <span className="question-span">2 Answers</span></a>
                                      </li>
                                      <li className="view-stats-meta"><i className="icon-eye" />1k
                                        <span className="question-span">Views</span>
                                      </li>
                                    </ul>
                                    <a className="meta-answer meta-answer-a" href="https://2code.info/demo/themes/Discy/Main/question/google-analytics-reads-like-a-seismic-chart-lately/#respond">Answer</a>
                                  </footer>
                                </div>
                                <div className="clearfix" />
                              </div>
                            </div>
                          </article>
                          <article id="post-116" className="article-question article-post clearfix question-answer-before question-vote-inside question-no-comments answer-question-not-jquery question-vote-image discoura-not-credential question-type-normal post-116 question type-question status-publish hentry question-category-analytics question_tags-analytics question_tags-google">
                            <div className="single-inner-content">
                              <div className="question-inner">
                                <div className="question-image-vote">
                                  <div className="author-image author__avatar author-image-42"><a href="https://2code.info/demo/themes/Discy/Main/profile/james/"><span className="author-image-span"><img className="avatar avatar-42 photo" alt="James Wane" title="James Wane" width={42} height={42} srcSet="https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-6-42x42.jpg 1x, https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-6-84x84.jpg 2x" src="team-6-42x42.jpg" /></span></a>
                                    <div className="author-image-pop-2 member-card" data-user={4}>
                                      <div className="author-pop-loader">
                                        <div className="loader_2" />
                                      </div>
                                    </div>
                                  </div>
                                  <ul className="question-vote question-mobile">
                                    <li className="question-vote-up"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_up-116" data-type="question" data-vote-type="up" className="wpqa_vote question_vote_up vote_allow" title="Like"><i className="icon-up-dir" /></a></li>
                                    <li className="vote_result">76</li>
                                    <li className="li_loader"><span className="loader_3 fa-spin" />
                                    </li>
                                    <li className="question-vote-down"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_down-116" data-type="question" data-vote-type="down" className="wpqa_vote question_vote_down vote_allow" title="Dislike"><i className="icon-down-dir" /></a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="question-content question-content-first">
                                  <header className="article-header">
                                    <div className="question-header">
                                      <a className="post-author" href="https://2code.info/demo/themes/Discy/Main/profile/james/">James
                                        Wane</a><span className="badge-span" style={{ backgroundColor: '#d9a34a' }}>Enlightened</span>
                                      <div className="post-meta">
                                        <span className="post-date">Asked:<span className="date-separator" /> <a href="https://2code.info/demo/themes/Discy/Main/question/what-are-your-thoughts-on-google-analytics-vs-other-analytics-platforms/"><span className="entry-date published">April 19,
                                          2018</span></a></span><span className="byline"><span className="post-cat">In: <a href="https://2code.info/demo/themes/Discy/Main/question-category/analytics/" rel="tag">Analytics</a></span></span>
                                      </div>
                                    </div>
                                  </header>
                                  <div>
                                    <h2 className="post-title"><a className="post-title" href="https://2code.info/demo/themes/Discy/Main/question/what-are-your-thoughts-on-google-analytics-vs-other-analytics-platforms/" rel="bookmark">What are your thoughts on Google
                                      Analytics vs other analytics platforms?</a></h2>
                                  </div>
                                </div>
                                <div className="question-not-mobile question-image-vote question-vote-sticky">
                                  <div className="question-sticky-stop">
                                    <ul className="question-vote">
                                      <li className="question-vote-up"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_up-116" data-type="question" data-vote-type="up" className="wpqa_vote question_vote_up vote_allow" title="Like"><i className="icon-up-dir" /></a>
                                      </li>
                                      <li className="vote_result">76</li>
                                      <li className="li_loader"><span className="loader_3 fa-spin" /></li>
                                      <li className="question-vote-down"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_down-116" data-type="question" data-vote-type="down" className="wpqa_vote question_vote_down vote_allow" title="Dislike"><i className="icon-down-dir" /></a></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="question-content question-content-second">
                                  <div className="post-wrap-content">
                                    <div className="question-content-text">
                                      <div className="all_not_single_post_content">
                                        <p className="excerpt-question">Recently heard about
                                          Heap which seems pretty cool, but I’m not sure
                                          if it would really be valuable, or simply
                                          another tool that I need to check. We are not at
                                          the point of using HubSpot/Marketo yet so Heap’s
                                          free ...</p>
                                      </div>
                                    </div>
                                    <div className="tagcloud">
                                      <div className="question-tags"><i className="icon-tags" /><a href="https://2code.info/demo/themes/Discy/Main/question-tag/analytics/">analytics</a><a href="https://2code.info/demo/themes/Discy/Main/question-tag/google/">google</a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="wpqa_error" />
                                  <div className="wpqa_success" />
                                  <footer className="question-footer">
                                    <ul className="footer-meta">
                                      <li className="best-answer-meta"><a href="https://2code.info/demo/themes/Discy/Main/question/what-are-your-thoughts-on-google-analytics-vs-other-analytics-platforms/#comments"><i className="icon-comment" /> <span className="question-span">0 Answers</span></a>
                                      </li>
                                      <li className="view-stats-meta"><i className="icon-eye" />1k
                                        <span className="question-span">Views</span>
                                      </li>
                                    </ul>
                                    <a className="meta-answer meta-answer-a" href="https://2code.info/demo/themes/Discy/Main/question/what-are-your-thoughts-on-google-analytics-vs-other-analytics-platforms/#respond">Answer</a>
                                  </footer>
                                </div>
                                <div className="clearfix" />
                              </div>
                            </div>
                          </article>
                          <article id="post-115" className="article-question article-post clearfix question-answer-before question-vote-inside question-with-comments answer-question-not-jquery question-vote-image discoura-not-credential question-type-normal post-115 question type-question status-publish hentry question-category-company question_tags-company question_tags-interview">
                            <div className="single-inner-content">
                              <div className="question-inner">
                                <div className="question-image-vote">
                                  <div className="author-image author__avatar author-image-42"><span className="author-image-span"><img className="avatar avatar-42 photo" alt="[Deleted User]" title="[Deleted User]" width={42} height={42} srcSet="https://secure.gravatar.com/avatar/?s=96&d=mm&r=g 1x, https://secure.gravatar.com/avatar/?s=96&d=mm&r=g 2x" src="none.png" /></span>
                                  </div>
                                  <ul className="question-vote question-mobile">
                                    <li className="question-vote-up"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_up-115" data-type="question" data-vote-type="up" className="wpqa_vote question_vote_up vote_allow" title="Like"><i className="icon-up-dir" /></a></li>
                                    <li className="vote_result">39</li>
                                    <li className="li_loader"><span className="loader_3 fa-spin" />
                                    </li>
                                    <li className="question-vote-down"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_down-115" data-type="question" data-vote-type="down" className="wpqa_vote question_vote_down vote_allow" title="Dislike"><i className="icon-down-dir" /></a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="question-content question-content-first">
                                  <header className="article-header">
                                    <div className="question-header">
                                      <span className="question-author-un">[Deleted User]</span>
                                      <div className="post-meta">
                                        <span className="post-date">Asked:<span className="date-separator" /> <a href="https://2code.info/demo/themes/Discy/Main/question/what-is-a-nice-way-to-end-an-interview-that-is-clearly-going-badly/"><span className="entry-date published">April 19,
                                          2018</span></a></span><span className="byline"><span className="post-cat">In: <a href="https://2code.info/demo/themes/Discy/Main/question-category/company/" rel="tag">Company</a></span></span>
                                      </div>
                                    </div>
                                  </header>
                                  <div>
                                    <h2 className="post-title"><a className="post-title" href="https://2code.info/demo/themes/Discy/Main/question/what-is-a-nice-way-to-end-an-interview-that-is-clearly-going-badly/" rel="bookmark">What is a nice way to end an
                                      interview that is clearly going badly?</a></h2>
                                  </div>
                                </div>
                                <div className="question-not-mobile question-image-vote question-vote-sticky">
                                  <div className="question-sticky-stop">
                                    <ul className="question-vote">
                                      <li className="question-vote-up"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_up-115" data-type="question" data-vote-type="up" className="wpqa_vote question_vote_up vote_allow" title="Like"><i className="icon-up-dir" /></a>
                                      </li>
                                      <li className="vote_result">39</li>
                                      <li className="li_loader"><span className="loader_3 fa-spin" /></li>
                                      <li className="question-vote-down"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_down-115" data-type="question" data-vote-type="down" className="wpqa_vote question_vote_down vote_allow" title="Dislike"><i className="icon-down-dir" /></a></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="question-content question-content-second">
                                  <div className="post-wrap-content">
                                    <div className="question-content-text">
                                      <div className="all_not_single_post_content">
                                        <p className="excerpt-question">As an interviewer, I
                                          occasionally conduct interviews that become
                                          painful as time goes on because the candidate is
                                          doing so poorly. I have the impression that, in
                                          these cases, the candidate internally knows they
                                          are not getting the job, and ...</p>
                                      </div>
                                    </div>
                                    <div className="tagcloud">
                                      <div className="question-tags"><i className="icon-tags" /><a href="https://2code.info/demo/themes/Discy/Main/question-tag/company/">company</a><a href="https://2code.info/demo/themes/Discy/Main/question-tag/interview/">interview</a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="wpqa_error" />
                                  <div className="wpqa_success" />
                                  <footer className="question-footer">
                                    <ul className="footer-meta">
                                      <li className="best-answer-meta meta-best-answer"><a href="https://2code.info/demo/themes/Discy/Main/question/what-is-a-nice-way-to-end-an-interview-that-is-clearly-going-badly/#comments"><i className="icon-comment" /> <span className="question-span">3 Answers</span></a>
                                      </li>
                                      <li className="view-stats-meta"><i className="icon-eye" />1k
                                        <span className="question-span">Views</span>
                                      </li>
                                    </ul>
                                    <a className="meta-answer meta-answer-a" href="https://2code.info/demo/themes/Discy/Main/question/what-is-a-nice-way-to-end-an-interview-that-is-clearly-going-badly/#respond">Answer</a>
                                  </footer>
                                </div>
                                <div className="clearfix" />
                              </div>{/* End question-inner */}
                            </div>{/* End single-inner-content */}
                          </article>{/* End article */}
                          <article id="post-114" className="article-question article-post clearfix question-answer-before question-vote-inside question-with-comments answer-question-not-jquery question-vote-image discoura-not-credential question-type-normal post-114 question type-question status-publish hentry question-category-company question_tags-company question_tags-facebook">
                            <div className="single-inner-content">
                              <div className="question-inner">
                                <div className="question-image-vote">
                                  <div className="author-image author__avatar author-image-42"><a href="https://2code.info/demo/themes/Discy/Main/profile/ahmed/"><span className="author-image-span"><img className="avatar avatar-42 photo" alt="Ahmed Hassan" title="Ahmed Hassan" width={42} height={42} srcSet="https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-7-42x42.jpg 1x, https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-7-84x84.jpg 2x" src="team-7-42x42.jpg" /></span></a>
                                    <div className="author-image-pop-2 member-card" data-user={1}>
                                      <div className="author-pop-loader">
                                        <div className="loader_2" />
                                      </div>
                                    </div>
                                  </div>
                                  <ul className="question-vote question-mobile">
                                    <li className="question-vote-up"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_up-114" data-type="question" data-vote-type="up" className="wpqa_vote question_vote_up vote_allow" title="Like"><i className="icon-up-dir" /></a></li>
                                    <li className="vote_result">46</li>
                                    <li className="li_loader"><span className="loader_3 fa-spin" />
                                    </li>
                                    <li className="question-vote-down"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_down-114" data-type="question" data-vote-type="down" className="wpqa_vote question_vote_down vote_allow" title="Dislike"><i className="icon-down-dir" /></a>
                                    </li>
                                  </ul>
                                </div>{/* End question-image-vote */}
                                <div className="question-content question-content-first">
                                  <header className="article-header">
                                    <div className="question-header">
                                      <a className="post-author" href="https://2code.info/demo/themes/Discy/Main/profile/ahmed/">Ahmed
                                        Hassan</a><span className="verified_user tooltip-n" original-title="Verified"><i className="icon-check" /></span><span className="badge-span" style={{ backgroundColor: '#d9a34a' }}>Enlightened</span>
                                      <div className="post-meta">
                                        <span className="post-date">Asked:<span className="date-separator" /> <a href="https://2code.info/demo/themes/Discy/Main/question/does-google-force-employees-who-have-offers-from-facebook-to-leave-immediately/"><span className="entry-date published">April 19,
                                          2018</span></a></span><span className="byline"><span className="post-cat">In: <a href="https://2code.info/demo/themes/Discy/Main/question-category/company/" rel="tag">Company</a></span></span>
                                      </div>
                                    </div>
                                  </header>
                                  <div>
                                    <h2 className="post-title"><a className="post-title" href="https://2code.info/demo/themes/Discy/Main/question/does-google-force-employees-who-have-offers-from-facebook-to-leave-immediately/" rel="bookmark">Does Google force employees who have
                                      offers from Facebook to leave immediately?</a></h2>
                                  </div>
                                </div>{/* End question-content-first */}
                                <div className="question-not-mobile question-image-vote question-vote-sticky">
                                  <div className="question-sticky-stop">
                                    <ul className="question-vote">
                                      <li className="question-vote-up"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_up-114" data-type="question" data-vote-type="up" className="wpqa_vote question_vote_up vote_allow" title="Like"><i className="icon-up-dir" /></a>
                                      </li>
                                      <li className="vote_result">46</li>
                                      <li className="li_loader"><span className="loader_3 fa-spin" /></li>
                                      <li className="question-vote-down"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_down-114" data-type="question" data-vote-type="down" className="wpqa_vote question_vote_down vote_allow" title="Dislike"><i className="icon-down-dir" /></a></li>
                                    </ul>
                                  </div>{/* End question-sticky */}
                                </div>{/* End question-image-vote */}
                                <div className="question-content question-content-second">
                                  <div className="post-wrap-content">
                                    <div className="question-content-text">
                                      <div className="all_not_single_post_content">
                                        <p className="excerpt-question">If a Google employee
                                          reveals that he or she intends to leave because
                                          they have *accepted*–not received–an offer from
                                          a talent competitor like Facebook, in some cases
                                          they will be “walked off” so that they will no
                                          longer have access ...</p>
                                      </div>{/* End all_not_single_post_content */}
                                    </div>
                                    <div className="tagcloud">
                                      <div className="question-tags"><i className="icon-tags" /><a href="https://2code.info/demo/themes/Discy/Main/question-tag/company/">company</a><a href="https://2code.info/demo/themes/Discy/Main/question-tag/facebook/">facebook</a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="wpqa_error" />
                                  <div className="wpqa_success" />
                                  <footer className="question-footer">
                                    <ul className="footer-meta">
                                      <li className="best-answer-meta meta-best-answer"><a href="https://2code.info/demo/themes/Discy/Main/question/does-google-force-employees-who-have-offers-from-facebook-to-leave-immediately/#comments"><i className="icon-comment" /> <span className="question-span">3 Answers</span></a>
                                      </li>
                                      <li className="view-stats-meta"><i className="icon-eye" />1k
                                        <span className="question-span">Views</span>
                                      </li>
                                    </ul>
                                    <a className="meta-answer meta-answer-a" href="https://2code.info/demo/themes/Discy/Main/question/does-google-force-employees-who-have-offers-from-facebook-to-leave-immediately/#respond">Answer</a>
                                  </footer>
                                </div>{/* End question-content-second */}
                                <div className="clearfix" />
                              </div>{/* End question-inner */}
                            </div>{/* End single-inner-content */}
                          </article>{/* End article */}
                          <article id="post-113" className="article-question article-post clearfix question-answer-before question-vote-inside question-with-comments answer-question-not-jquery question-vote-image discoura-not-credential question-type-normal post-113 question type-question status-publish hentry question-category-language question_tags-french question_tags-language">
                            <div className="single-inner-content">
                              <div className="question-inner">
                                <div className="question-image-vote">
                                  <div className="author-image author__avatar author-image-42"><a href="https://2code.info/demo/themes/Discy/Main/profile/john/"><span className="author-image-span"><img className="avatar avatar-42 photo" alt="John Peter" title="John Peter" width={42} height={42} srcSet="https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-9-42x42.jpg 1x, https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-9-84x84.jpg 2x" src="team-9-42x42.jpg" /></span></a>
                                    <div className="author-image-pop-2 member-card" data-user={2}>
                                      <div className="author-pop-loader">
                                        <div className="loader_2" />
                                      </div>
                                    </div>
                                  </div>
                                  <ul className="question-vote question-mobile">
                                    <li className="question-vote-up"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_up-113" data-type="question" data-vote-type="up" className="wpqa_vote question_vote_up vote_allow" title="Like"><i className="icon-up-dir" /></a></li>
                                    <li className="vote_result">29</li>
                                    <li className="li_loader"><span className="loader_3 fa-spin" />
                                    </li>
                                    <li className="question-vote-down"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_down-113" data-type="question" data-vote-type="down" className="wpqa_vote question_vote_down vote_allow" title="Dislike"><i className="icon-down-dir" /></a>
                                    </li>
                                  </ul>
                                </div>{/* End question-image-vote */}
                                <div className="question-content question-content-first">
                                  <header className="article-header">
                                    <div className="question-header">
                                      <a className="post-author" href="https://2code.info/demo/themes/Discy/Main/profile/john/">John
                                        Peter</a><span className="badge-span" style={{ backgroundColor: '#d9a34a' }}>Enlightened</span>
                                      <div className="post-meta">
                                        <span className="post-date">Asked:<span className="date-separator" /> <a href="https://2code.info/demo/themes/Discy/Main/question/is-there-an-english-equivalent-to-the-french-expression-il-faut-dabord-apprendre-a-marcher-avant-de-courir/"><span className="entry-date published">April 19,
                                          2018</span></a></span><span className="byline"><span className="post-cat">In: <a href="https://2code.info/demo/themes/Discy/Main/question-category/language/" rel="tag">Language</a></span></span>
                                      </div>
                                    </div>
                                  </header>
                                  <div>
                                    <h2 className="post-title"><a className="post-title" href="https://2code.info/demo/themes/Discy/Main/question/is-there-an-english-equivalent-to-the-french-expression-il-faut-dabord-apprendre-a-marcher-avant-de-courir/" rel="bookmark">Is there an English equivalent to the
                                      French expression: “il faut d’abord apprendre à
                                      marcher avant de courir”?</a></h2>
                                  </div>
                                </div>{/* End question-content-first */}
                                <div className="question-not-mobile question-image-vote question-vote-sticky">
                                  <div className="question-sticky-stop">
                                    <ul className="question-vote">
                                      <li className="question-vote-up"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_up-113" data-type="question" data-vote-type="up" className="wpqa_vote question_vote_up vote_allow" title="Like"><i className="icon-up-dir" /></a>
                                      </li>
                                      <li className="vote_result">29</li>
                                      <li className="li_loader"><span className="loader_3 fa-spin" /></li>
                                      <li className="question-vote-down"><a href="https://2code.info/demo/themes/Discy/Main/#" id="question_vote_down-113" data-type="question" data-vote-type="down" className="wpqa_vote question_vote_down vote_allow" title="Dislike"><i className="icon-down-dir" /></a></li>
                                    </ul>
                                  </div>{/* End question-sticky */}
                                </div>{/* End question-image-vote */}
                                <div className="question-content question-content-second">
                                  <div className="post-wrap-content">
                                    <div className="question-content-text">
                                      <div className="all_not_single_post_content">
                                        <p className="excerpt-question">I know this means “one
                                          must learn to walk before running”, but is there
                                          a less literal translation that is perhaps more
                                          appealing to an English-speaking audience?
                                        </p>
                                      </div>{/* End all_not_single_post_content */}
                                    </div>
                                    <div className="tagcloud">
                                      <div className="question-tags"><i className="icon-tags" /><a href="https://2code.info/demo/themes/Discy/Main/question-tag/french/">french</a><a href="https://2code.info/demo/themes/Discy/Main/question-tag/language/">language</a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="wpqa_error" />
                                  <div className="wpqa_success" />
                                  <footer className="question-footer">
                                    <ul className="footer-meta">
                                      <li className="best-answer-meta meta-best-answer"><a href="https://2code.info/demo/themes/Discy/Main/question/is-there-an-english-equivalent-to-the-french-expression-il-faut-dabord-apprendre-a-marcher-avant-de-courir/#comments"><i className="icon-comment" /> <span className="question-span">3 Answers</span></a>
                                      </li>
                                      <li className="view-stats-meta"><i className="icon-eye" />1k
                                        <span className="question-span">Views</span>
                                      </li>
                                    </ul>
                                    <a className="meta-answer meta-answer-a" href="https://2code.info/demo/themes/Discy/Main/question/is-there-an-english-equivalent-to-the-french-expression-il-faut-dabord-apprendre-a-marcher-avant-de-courir/#respond">Answer</a>
                                  </footer>
                                </div>{/* End question-content-second */}
                                <div className="clearfix" />
                              </div>{/* End question-inner */}
                            </div>{/* End single-inner-content */}
                          </article>{/* End article */}
                        </div>{/* End post-articles */}
                        <div className="clearfix" />
                        <div className="pagination-wrap pagination-question">
                          <div className="pagination-nav posts-load-more">
                            <span className="load_span"><span className="loader_2" /></span>
                            <div className="load-more"><a href="https://2code.info/demo/themes/Discy/Main/page/2/">Load More
                              Questions</a></div>
                          </div>{/* End pagination-nav */}
                        </div>
                      </section>{/* End section */}
                    </div>
                    <div className="hide-main-inner" />
                    <div className="hide-sidebar sidebar-width">
                      <div className="hide-sidebar-inner" />
                    </div>
                    <aside className="sidebar sidebar-width float_l fixed-sidebar" style={{ position: 'relative', overflow: 'visible', boxSizing: 'border-box', minHeight: 3262 }}>
                      <div className="theiaStickySidebar" style={{ paddingTop: 0, paddingBottom: 1, position: 'absolute', top: 1642, width: 279 }}>
                        <h3 className="screen-reader-text">Sidebar</h3>
                        <div className="inner-sidebar">
                          <div className="widget card widget_ask">
                            <a target="_self" href="https://2code.info/demo/themes/Discy/Main/add-question/" className="button-default btn btn__primary btn__block btn__semi__height wpqa-question">Ask
                              A Question</a>
                          </div>
                          <section id="stats-widget-2" className="widget-no-divider widget stats-widget">
                            <h3 className="screen-reader-text">Stats</h3>
                            <div className="widget-wrap stats-card">
                              <ul className="stats-inner list-unstyled mb-0">
                                <li className="stats-card__item stats-questions">
                                  <div className="d-flex justify-content-between stats-card__item_div">
                                    <span className="stats-text">
                                      Questions </span>
                                    <span className="stats-value">
                                      21 </span>
                                  </div>
                                </li>
                                <li className="stats-card__item stats-answers">
                                  <div className="d-flex justify-content-between stats-card__item_div">
                                    <span className="stats-text">
                                      Answers </span>
                                    <span className="stats-value">
                                      72 </span>
                                  </div>
                                </li>
                                <li className="stats-card__item stats-best_answers">
                                  <div className="d-flex justify-content-between stats-card__item_div">
                                    <span className="stats-text">
                                      Best Answers </span>
                                    <span className="stats-value">
                                      15 </span>
                                  </div>
                                </li>
                                <li className="stats-card__item stats-users">
                                  <div className="d-flex justify-content-between stats-card__item_div">
                                    <span className="stats-text">
                                      Users </span>
                                    <span className="stats-value">
                                      21 </span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </section>
                          <div className="widget card tabs-wrap widget-tabs">
                            <div className="widget-title widget-title-tabs">
                              <ul className="tabs tabstabs-widget-2">
                                <li className="tab current"><a href="https://2code.info/demo/themes/Discy/Main/#" className>Popular</a></li>
                                <li className="tab"><a href="https://2code.info/demo/themes/Discy/Main/#">Answers</a>
                                </li>
                              </ul>
                              <div className="clearfix" />
                            </div>
                            <div className="widget-wrap">
                              <div className="widget-posts tab-inner-wrap tab-inner-wraptabs-widget-2 active-tab">
                                <div className="user-notifications user-profile-area questions-card">
                                  <div>
                                    <ul>
                                      <li className="notifications__item question-item  d-flex widget-posts-text widget-no-img">
                                        <span className="span-icon author__avatar"><a href="https://2code.info/demo/themes/Discy/Main/profile/marko/"><img className="avatar avatar-20 rounded-circle photo" alt="Marko Smith" title="Marko Smith" width={20} height={20} srcSet="https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-4-20x20.jpg 1x, https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-4-40x40.jpg 2x" src="team-4-20x20.jpg" /></a></span>
                                        <div>
                                          <h3 className="question__title"><a className="color-dark" href="https://2code.info/demo/themes/Discy/Main/question/how-to-approach-applying-for-a-job-at-a-company-owned-by-a-friend/" title="How to approach applying for a job at a company owned by a friend?" rel="bookmark">How to approach applying
                                            for a job at a company ...</a></h3>
                                          <ul className="widget-post-meta question-item__meta list-unstyled mb-0 d-flex align-items-center">
                                            <li><a className="post-meta-comment" href="https://2code.info/demo/themes/Discy/Main/question/how-to-approach-applying-for-a-job-at-a-company-owned-by-a-friend/#comments"><i className="icon-comment" />6
                                              Answers</a></li>
                                          </ul>
                                        </div>
                                      </li>
                                      <li className="notifications__item question-item  d-flex widget-posts-text widget-no-img">
                                        <span className="span-icon author__avatar"><a href="https://2code.info/demo/themes/Discy/Main/profile/aaron/"><img className="avatar avatar-20 rounded-circle photo" alt="Aaron Aiken" title="Aaron Aiken" width={20} height={20} srcSet="https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2021/10/team-1-20x20.jpg 1x, https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2021/10/team-1-40x40.jpg 2x" src="team-1-20x20.jpg" /></a></span>
                                        <div>
                                          <h3 className="question__title"><a className="color-dark" href="https://2code.info/demo/themes/Discy/Main/question/why-are-the-british-confused-about-us-calling-bread-rolls-biscuits-when-they-call-bread-rolls-puddings/" title="Why are the British confused about us calling bread rolls “biscuits” when they call bread rolls “puddings”?" rel="bookmark">Why are the British
                                            confused about us calling bread rolls
                                            ...</a></h3>
                                          <ul className="widget-post-meta question-item__meta list-unstyled mb-0 d-flex align-items-center">
                                            <li><a className="post-meta-comment" href="https://2code.info/demo/themes/Discy/Main/question/why-are-the-british-confused-about-us-calling-bread-rolls-biscuits-when-they-call-bread-rolls-puddings/#comments"><i className="icon-comment" />6
                                              Answers</a></li>
                                          </ul>
                                        </div>
                                      </li>
                                      <li className="notifications__item question-item  d-flex widget-posts-text widget-no-img">
                                        <span className="span-icon author__avatar"><a href="https://2code.info/demo/themes/Discy/Main/profile/marko/"><img className="avatar avatar-20 rounded-circle photo" alt="Marko Smith" title="Marko Smith" width={20} height={20} srcSet="https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-4-20x20.jpg 1x, https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-4-40x40.jpg 2x" src="team-4-20x20.jpg" /></a></span>
                                        <div>
                                          <h3 className="question__title"><a className="color-dark" href="https://2code.info/demo/themes/Discy/Main/question/what-is-a-programmers-life-like/" title="What is a programmer’s life like?" rel="bookmark">What is a programmer’s
                                            life like?</a></h3>
                                          <ul className="widget-post-meta question-item__meta list-unstyled mb-0 d-flex align-items-center">
                                            <li><a className="post-meta-comment" href="https://2code.info/demo/themes/Discy/Main/question/what-is-a-programmers-life-like/#comments"><i className="icon-comment" />5
                                              Answers</a></li>
                                          </ul>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="tab-inner-wrap tab-inner-wraptabs-widget-2" style={{ display: 'none' }}>
                                <div className="user-notifications user-profile-area">
                                  <div>
                                    <ul>
                                      <li className="notifications__item d-flex ">
                                        <span className="span-icon author__avatar">
                                          <img className="avatar avatar-25 rounded-circle photo" alt="Mitchy" title="Mitchy" width={25} height={25} srcSet="https://secure.gravatar.com/avatar/3a4977b0816a4267697c3364633dc646?s=96&d=mm&r=g 1x, https://secure.gravatar.com/avatar/3a4977b0816a4267697c3364633dc646?s=96&d=mm&r=g 2x" src="3a4977b0816a4267697c3364633dc646.png" />
                                        </span>
                                        <div className="notification__body">
                                          Mitchy added an answer <span className="question-title"><a className="notification__question notification__question-dark" href="https://2code.info/demo/themes/Discy/Main/question/why-are-the-british-confused-about-us-calling-bread-rolls-biscuits-when-they-call-bread-rolls-puddings/#comment-9633">Jesus</a></span>
                                          <span className="notifications-date notification__date d-block mt-2">October
                                            9, 2022 at 1:06 pm</span>
                                        </div>
                                      </li>
                                      <li className="notifications__item d-flex ">
                                        <span className="span-icon author__avatar">
                                          <a href="https://2code.info/demo/themes/Discy/Main/profile/martin/">
                                            <img className="avatar avatar-25 rounded-circle photo" alt="Martin Hope" title="Martin Hope" width={25} height={25} srcSet="https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-2-25x25.jpg 1x, https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-2-50x50.jpg 2x" src="team-2-25x25.jpg" />
                                          </a>
                                        </span>
                                        <div className="notification__body">
                                          <a className="author__name" href="https://2code.info/demo/themes/Discy/Main/profile/martin/">Martin
                                            Hope</a> added an answer <span className="question-title"><a className="notification__question notification__question-dark" href="https://2code.info/demo/themes/Discy/Main/question/why-are-the-british-confused-about-us-calling-bread-rolls-biscuits-when-they-call-bread-rolls-puddings/#comment-72">They
                                              might be as confused as to why you
                                              keep…</a></span>
                                          <span className="notifications-date notification__date d-block mt-2">April
                                            19, 2018 at 2:07 am</span>
                                        </div>
                                      </li>
                                      <li className="notifications__item d-flex ">
                                        <span className="span-icon author__avatar">
                                          <a href="https://2code.info/demo/themes/Discy/Main/profile/marko/">
                                            <img className="avatar avatar-25 rounded-circle photo" alt="Marko Smith" title="Marko Smith" width={25} height={25} srcSet="https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-4-25x25.jpg 1x, https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-4-50x50.jpg 2x" src="team-4-25x25.jpg" />
                                          </a>
                                        </span>
                                        <div className="notification__body">
                                          <a className="author__name" href="https://2code.info/demo/themes/Discy/Main/profile/marko/">Marko
                                            Smith</a> added an answer <span className="question-title"><a className="notification__question notification__question-dark" href="https://2code.info/demo/themes/Discy/Main/question/why-are-the-british-confused-about-us-calling-bread-rolls-biscuits-when-they-call-bread-rolls-puddings/#comment-71">I
                                              have never heard a British person EVER
                                              call a…</a></span>
                                          <span className="notifications-date notification__date d-block mt-2">April
                                            19, 2018 at 2:07 am</span>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <section id="activities-widget-2" className="widget activities-widget">
                            <h2 className="widget-title"><i className="icon-folder" />Recent Activities</h2>
                            <div className="widget-wrap">
                              <div className="user-notifications user-profile-area custom__notifications">
                                <ul className="list-unstyled mb-0">
                                  <li className="notifications__item d-flex  notifications__answer_vote_up">
                                    <i className="icon-up-dir" />
                                    <div className="notification__body"><a className="notification__question notification__question-dark" href="https://2code.info/demo/themes/Discy/Main/question/is-this-statement-i-see-him-last-night-can-be-understood-as-i-saw-him-last-night/#comment-63">Voted
                                      up answer.</a><span className="notifications-date notification__date d-block mt-2">September
                                        25, 2022 at 6:06 pm</span>
                                    </div>
                                  </li>
                                  <li className="notifications__item d-flex  notifications__answer_vote_down">
                                    <i className="icon-down-dir" />
                                    <div className="notification__body"><a className="notification__question notification__question-dark" href="https://2code.info/demo/themes/Discy/Main/question/is-this-statement-i-see-him-last-night-can-be-understood-as-i-saw-him-last-night/#comment-63">Voted
                                      down answer.</a><span className="notifications-date notification__date d-block mt-2">September
                                        25, 2022 at 6:06 pm</span>
                                    </div>
                                  </li>
                                  <li className="notifications__item d-flex align-items-center justify-content-center notification__show-all">
                                    <a href="https://2code.info/demo/themes/Discy/Main/profile/abdullah511/activities/">Show
                                      all activities.</a>
                                  </li>
                                </ul>
                              </div>{/* End user-notifications */}
                            </div>
                          </section>
                          <section id="users-widget-2" className="widget users-widget">
                            <h2 className="widget-title"><i className="icon-folder" />Top Members</h2>
                            <div className="widget-wrap">
                              <div className="user-section user-section-small row row-warp row-boot user-not-normal">
                                <div className="col col12 col-boot-12">
                                  <div className="post-section user-area user-area-small community-card community-card-layout3 d-flex flex-wrap justify-content-between him-user widget-not-icon-user">
                                    <div className="post-inner member__info community__info">
                                      <div className="author-image author__avatar author-image-42">
                                        <a href="https://2code.info/demo/themes/Discy/Main/profile/martin/"><span className="author-image-span"><img className="avatar avatar-42 rounded-circle photo" alt="Martin Hope" title="Martin Hope" width={42} height={42} srcSet="https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-2-42x42.jpg 1x, https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-2-84x84.jpg 2x" src="team-2-42x42.jpg" /></span></a>
                                      </div>
                                      <div className="user-content">
                                        <div className="user-inner">
                                          <h4 className="member__name mb-1"><a href="https://2code.info/demo/themes/Discy/Main/profile/martin/">Martin
                                            Hope</a></h4>
                                          <div className="user-data">
                                            <ul className="member__stats list-unstyled mb-0 d-flex">
                                              <li className="user-questions stats__item community__count">
                                                <a href="https://2code.info/demo/themes/Discy/Main/profile/martin/questions/">
                                                  <span className="stats__count">3
                                                  </span><span className="stats__text">Questions</span>
                                                </a>
                                              </li>
                                              <li className="user-points stats__item community__count">
                                                <a href="https://2code.info/demo/themes/Discy/Main/profile/martin/points/">
                                                  <span className="stats__count">943
                                                  </span><span className="stats__text">Points</span>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>{/* End user-data */}<span className="badge-span" style={{ backgroundColor: '#d9a34a' }}>Enlightened</span>
                                        </div>
                                      </div>{/* End user-content */}
                                      <div className="clearfix" />
                                    </div>{/* End post-inner */}
                                  </div>{/* End post */}
                                </div>
                                <div className="col col12 col-boot-12">
                                  <div className="post-section user-area user-area-small community-card community-card-layout3 d-flex flex-wrap justify-content-between him-user widget-not-icon-user">
                                    <div className="post-inner member__info community__info">
                                      <div className="author-image author__avatar author-image-42">
                                        <a href="https://2code.info/demo/themes/Discy/Main/profile/ahmed/"><span className="author-image-span"><img className="avatar avatar-42 rounded-circle photo" alt="Ahmed Hassan" title="Ahmed Hassan" width={42} height={42} srcSet="https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-7-42x42.jpg 1x, https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-7-84x84.jpg 2x" src="team-7-42x42.jpg" /></span></a>
                                      </div>
                                      <div className="user-content">
                                        <div className="user-inner">
                                          <h4 className="member__name mb-1"><a href="https://2code.info/demo/themes/Discy/Main/profile/ahmed/">Ahmed
                                            Hassan</a><span className="verified_user tooltip-n" original-title="Verified"><i className="icon-check" /></span></h4>
                                          <div className="user-data">
                                            <ul className="member__stats list-unstyled mb-0 d-flex">
                                              <li className="user-questions stats__item community__count">
                                                <a href="https://2code.info/demo/themes/Discy/Main/profile/ahmed/questions/">
                                                  <span className="stats__count">3
                                                  </span><span className="stats__text">Questions</span>
                                                </a>
                                              </li>
                                              <li className="user-points stats__item community__count">
                                                <a href="https://2code.info/demo/themes/Discy/Main/profile/ahmed/points/">
                                                  <span className="stats__count">589
                                                  </span><span className="stats__text">Points</span>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>{/* End user-data */}<span className="badge-span" style={{ backgroundColor: '#d9a34a' }}>Enlightened</span>
                                        </div>
                                      </div>{/* End user-content */}
                                      <div className="clearfix" />
                                    </div>{/* End post-inner */}
                                  </div>{/* End post */}
                                </div>
                                <div className="col col12 col-boot-12">
                                  <div className="post-section user-area user-area-small community-card community-card-layout3 d-flex flex-wrap justify-content-between him-user widget-not-icon-user">
                                    <div className="post-inner member__info community__info">
                                      <div className="author-image author__avatar author-image-42">
                                        <a href="https://2code.info/demo/themes/Discy/Main/profile/marko/"><span className="author-image-span"><img className="avatar avatar-42 rounded-circle photo" alt="Marko Smith" title="Marko Smith" width={42} height={42} srcSet="https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-4-42x42.jpg 1x, https://2code.info/demo/themes/Discy/Main/wp-content/uploads/2018/04/team-4-84x84.jpg 2x" src="team-4-42x42.jpg" /></span></a>
                                      </div>
                                      <div className="user-content">
                                        <div className="user-inner">
                                          <h4 className="member__name mb-1"><a href="https://2code.info/demo/themes/Discy/Main/profile/marko/">Marko
                                            Smith</a></h4>
                                          <div className="user-data">
                                            <ul className="member__stats list-unstyled mb-0 d-flex">
                                              <li className="user-questions stats__item community__count">
                                                <a href="https://2code.info/demo/themes/Discy/Main/profile/marko/questions/">
                                                  <span className="stats__count">3
                                                  </span><span className="stats__text">Questions</span>
                                                </a>
                                              </li>
                                              <li className="user-points stats__item community__count">
                                                <a href="https://2code.info/demo/themes/Discy/Main/profile/marko/points/">
                                                  <span className="stats__count">442
                                                  </span><span className="stats__text">Points</span>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>{/* End user-data */}<span className="badge-span" style={{ backgroundColor: '#d9a34a' }}>Enlightened</span>
                                        </div>
                                      </div>{/* End user-content */}
                                      <div className="clearfix" />
                                    </div>{/* End post-inner */}
                                  </div>{/* End post */}
                                </div>
                              </div>
                            </div>
                          </section>
                          <section id="tag_cloud-2" className="widget widget_tag_cloud">
                            <h2 className="widget-title"><i className="icon-folder" />Trending Tags</h2>
                            <div className="tagcloud"><a href="https://2code.info/demo/themes/Discy/Main/question-tag/analytics/" className="tag-cloud-link tag-link-11 tag-link-position-1" style={{ fontSize: '22pt' }} aria-label="analytics (3 items)">analytics</a>
                              <a href="https://2code.info/demo/themes/Discy/Main/question-tag/british/" className="tag-cloud-link tag-link-37 tag-link-position-2" style={{ fontSize: '8pt' }} aria-label="british (1 item)">british</a>
                              <a href="https://2code.info/demo/themes/Discy/Main/question-tag/company/" className="tag-cloud-link tag-link-32 tag-link-position-3" style={{ fontSize: '16.4pt' }} aria-label="company (2 items)">company</a>
                              <a href="https://2code.info/demo/themes/Discy/Main/question-tag/computer/" className="tag-cloud-link tag-link-28 tag-link-position-4" style={{ fontSize: '8pt' }} aria-label="computer (1 item)">computer</a>
                              <a href="https://2code.info/demo/themes/Discy/Main/question-tag/developers/" className="tag-cloud-link tag-link-16 tag-link-position-5" style={{ fontSize: '8pt' }} aria-label="developers (1 item)">developers</a>
                              <a href="https://2code.info/demo/themes/Discy/Main/question-tag/django/" className="tag-cloud-link tag-link-26 tag-link-position-6" style={{ fontSize: '8pt' }} aria-label="django (1 item)">django</a>
                              <a href="https://2code.info/demo/themes/Discy/Main/question-tag/employee/" className="tag-cloud-link tag-link-30 tag-link-position-7" style={{ fontSize: '8pt' }} aria-label="employee (1 item)">employee</a>
                              <a href="https://2code.info/demo/themes/Discy/Main/question-tag/employer/" className="tag-cloud-link tag-link-29 tag-link-position-8" style={{ fontSize: '8pt' }} aria-label="employer (1 item)">employer</a>
                              <a href="https://2code.info/demo/themes/Discy/Main/question-tag/english/" className="tag-cloud-link tag-link-36 tag-link-position-9" style={{ fontSize: '22pt' }} aria-label="english (3 items)">english</a>
                              <a href="https://2code.info/demo/themes/Discy/Main/question-tag/facebook/" className="tag-cloud-link tag-link-33 tag-link-position-10" style={{ fontSize: '8pt' }} aria-label="facebook (1 item)">facebook</a>
                              <a href="https://2code.info/demo/themes/Discy/Main/question-tag/french/" className="tag-cloud-link tag-link-31 tag-link-position-11" style={{ fontSize: '8pt' }} aria-label="french (1 item)">french</a>
                              <a href="https://2code.info/demo/themes/Discy/Main/question-tag/google/" className="tag-cloud-link tag-link-35 tag-link-position-12" style={{ fontSize: '16.4pt' }} aria-label="google (2 items)">google</a>
                              <a href="https://2code.info/demo/themes/Discy/Main/question-tag/interview/" className="tag-cloud-link tag-link-34 tag-link-position-13" style={{ fontSize: '8pt' }} aria-label="interview (1 item)">interview</a>
                              <a href="https://2code.info/demo/themes/Discy/Main/question-tag/javascript/" className="tag-cloud-link tag-link-27 tag-link-position-14" style={{ fontSize: '8pt' }} aria-label="javascript (1 item)">javascript</a>
                              <a href="https://2code.info/demo/themes/Discy/Main/question-tag/language/" className="tag-cloud-link tag-link-25 tag-link-position-15" style={{ fontSize: '22pt' }} aria-label="language (3 items)">language</a>
                              <a href="https://2code.info/demo/themes/Discy/Main/question-tag/life/" className="tag-cloud-link tag-link-14 tag-link-position-16" style={{ fontSize: '8pt' }} aria-label="life (1 item)">life</a>
                              <a href="https://2code.info/demo/themes/Discy/Main/question-tag/php/" className="tag-cloud-link tag-link-24 tag-link-position-17" style={{ fontSize: '8pt' }} aria-label="php (1 item)">php</a>
                              <a href="https://2code.info/demo/themes/Discy/Main/question-tag/programmer/" className="tag-cloud-link tag-link-15 tag-link-position-18" style={{ fontSize: '8pt' }} aria-label="programmer (1 item)">programmer</a>
                              <a href="https://2code.info/demo/themes/Discy/Main/question-tag/programs/" className="tag-cloud-link tag-link-12 tag-link-position-19" style={{ fontSize: '16.4pt' }} aria-label="programs (2 items)">programs</a>
                              <a href="https://2code.info/demo/themes/Discy/Main/question-tag/salary/" className="tag-cloud-link tag-link-17 tag-link-position-20" style={{ fontSize: '8pt' }} aria-label="salary (1 item)">salary</a>
                              <a href="https://2code.info/demo/themes/Discy/Main/question-tag/university/" className="tag-cloud-link tag-link-13 tag-link-position-21" style={{ fontSize: '8pt' }} aria-label="university (1 item)">university</a>
                            </div>
                          </section>
                        </div>
                      </div>
                    </aside>
                  </div>
                </main>{/* End discy-site-content */}
                <nav className="nav_menu float_r fixed_nav_menu" style={{ position: 'relative', overflow: 'visible', boxSizing: 'border-box', minHeight: 3262 }}>
                  <div className="theiaStickySidebar" style={{ paddingTop: 0, paddingBottom: 1, position: 'absolute', top: 2533, width: 170 }}>
                    <h3 className="screen-reader-text">Explore</h3>
                    <ul id="menu-explore" className="menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-64 current_page_item menu-item-90">
                        <a className href="https://2code.info/demo/themes/Discy/Main/"><i className="icon-home" />Home</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-170"><a className href="https://2code.info/demo/themes/Discy/Main/questions-feed/"><i className="icon-newspaper" />Feed</a></li>
                      <li className="wpqa-menu wpqa-profile-nav menu-item menu-item-type-custom menu-item-object-custom menu-item-91 li-profile">
                        <a className href="https://2code.info/demo/themes/Discy/Main/profile/abdullah511/"><i className="icon-vcard" />User Profile</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-93"><a className href="https://2code.info/demo/themes/Discy/Main/communities/"><i className="icon-folder" />Communities</a></li>
                      <li className="nav_menu_open menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-94">
                        <a className href="https://2code.info/demo/themes/Discy/Main/questions/"><i className="icon-book-open" />Questions</a>
                        <ul className="sub-menu">
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-95">
                            <a className href="https://2code.info/demo/themes/Discy/Main/?show=recent-questions">New
                              Questions</a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-96">
                            <a className href="https://2code.info/demo/themes/Discy/Main/?show=most-voted">Trending
                              Questions</a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-97">
                            <a className href="https://2code.info/demo/themes/Discy/Main/?show=most-visited">Must
                              read Questions</a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-98">
                            <a className href="https://2code.info/demo/themes/Discy/Main/?show=most-answered">Hot
                              Questions</a>
                          </li>
                        </ul>
                      </li>
                      <li className="wpqa-menu wpqa-poll-nav menu-item menu-item-type-custom menu-item-object-custom menu-item-126 li-poll">
                        <a className href="https://2code.info/demo/themes/Discy/Main/questions/?type=poll"><i className="icon-megaphone" />Polls</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-178"><a className href="https://2code.info/demo/themes/Discy/Main/groups-page/"><i className="icon-globe" />Groups</a></li>
                      <li className="wpqa-menu wpqa-add-group-nav menu-item menu-item-type-custom menu-item-object-custom menu-item-177 li-add-group">
                        <a className href="https://2code.info/demo/themes/Discy/Main/add-group/"><i className="icon-network" />Add group</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-100"><a className href="https://2code.info/demo/themes/Discy/Main/tags/"><i className="icon-tag" />Tags</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-102"><a className href="https://2code.info/demo/themes/Discy/Main/badges/"><i className="icon-trophy" />Badges</a></li>
                      <li className="wpqa-menu wpqa-buy-points-nav menu-item menu-item-type-custom menu-item-object-custom menu-item-173 li-buy-points">
                        <a className href="https://2code.info/demo/themes/Discy/Main/buy-points/"><i className="icon-star" />Buy Points</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-101"><a className href="https://2code.info/demo/themes/Discy/Main/users/"><i className="icon-users" />Users</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-103"><a className href="https://2code.info/demo/themes/Discy/Main/faqs/"><i className="icon-lifebuoy" />Help</a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-172"><a className target="_blank" href="https://1.envato.market/drV57"><i className="icon-basket" />Buy Theme</a></li>
                    </ul>
                  </div>
                </nav>{/* End nav_menu */}
              </div>{/* End the-main-container */}
            </div>{/* End discy-inner-content */}
          </div>{/* End main-content */}
          <footer className="footer no-widget-icons" itemScope itemType="https://schema.org/WPFooter">
            <div id="inner-footer" className="wrap clearfix">
              <div className="top-footer">
                <div className="the-main-container">
                  <aside>
                    <h3 className="screen-reader-text">Footer</h3>
                    <div className="col4">
                      <section id="about-widget-2" className="widget about-widget">
                        <div className="widget-wrap">
                          <div className="about-image about-image-text" style={{ marginTop: 50 }}>
                            <img src="logo-footer.png" width height alt="Discy" />
                          </div>
                          <div className="about-text">
                            <div className="empty-title">
                              <h2 className="widget-title"><i className="icon-folder" /></h2>
                            </div>Discy is a social questions &amp; Answers Engine which will help you
                            establis your community and connect with other people.
                          </div>
                        </div>
                      </section>
                    </div>
                    <div className="col2">
                      <section id="nav_menu-2" className="widget widget_nav_menu">
                        <h2 className="widget-title"><i className="icon-folder" />About Us</h2>
                        <div className="menu-company-container">
                          <ul id="menu-company" className="menu">
                            <li id="menu-item-71" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-71">
                              <a className href="https://2code.info/demo/themes/Discy/Main/users/">Meet
                                The Team</a>
                            </li>
                            <li id="menu-item-72" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-72">
                              <a className href="https://2code.info/demo/themes/Discy/Main/blog/">Blog</a>
                            </li>
                            <li id="menu-item-73" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73">
                              <a className href="https://2code.info/demo/themes/Discy/Main/about-us/">About
                                Us</a>
                            </li>
                            <li id="menu-item-74" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-74">
                              <a className href="https://2code.info/demo/themes/Discy/Main/contact-us/">Contact
                                Us</a>
                            </li>
                          </ul>
                        </div>
                      </section>
                    </div>
                    <div className="col2">
                      <section id="nav_menu-3" className="widget widget_nav_menu">
                        <h2 className="widget-title"><i className="icon-folder" />Legal Stuff</h2>
                        <div className="menu-legal-stuff-container">
                          <ul id="menu-legal-stuff" className="menu">
                            <li id="menu-item-87" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-87">
                              <a className href="https://2code.info/demo/themes/Discy/Main/faqs/">Terms
                                of Use</a>
                            </li>
                            <li id="menu-item-88" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-88">
                              <a className href="https://2code.info/demo/themes/Discy/Main/faqs/">Privacy
                                Policy</a>
                            </li>
                            <li id="menu-item-89" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-89">
                              <a className href="https://2code.info/demo/themes/Discy/Main/faqs/">Cookie
                                Policy</a>
                            </li>
                          </ul>
                        </div>
                      </section>
                    </div>
                    <div className="col2">
                      <section id="nav_menu-4" className="widget widget_nav_menu">
                        <h2 className="widget-title"><i className="icon-folder" />Help</h2>
                        <div className="menu-help-container">
                          <ul id="menu-help" className="menu">
                            <li id="menu-item-86" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-86">
                              <a className href="https://2code.info/demo/themes/Discy/Main/faqs/">Knowledge
                                Base</a>
                            </li>
                            <li id="menu-item-85" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-85">
                              <a className href="https://2code.info/demo/themes/Discy/Main/contact-us/">Support</a>
                            </li>
                          </ul>
                        </div>
                      </section>
                    </div>
                    <div className="col2">
                      <section id="social-widget-2" className="widget social-widget">
                        <h2 className="widget-title"><i className="icon-folder" />Follow</h2>
                        <div className="widget-wrap">
                          <ul className="social-ul">
                            <li className="social-facebook"><a title="Facebook" href="https://www.facebook.com/2code.info/" target="_blank"><i className="icon-facebook" /></a></li>
                            <li className="social-twitter"><a title="Twitter" href="https://twitter.com/2codeThemes" target="_blank"><i className="icon-twitter" /></a></li>
                            <li className="social-linkedin"><a title="Linkedin" href="https://2code.info/demo/themes/Discy/Main/#" target="_blank"><i className="icon-linkedin" /></a></li>
                            <li className="social-rss"><a title="Feed" href="https://2code.info/demo/themes/Discy/Main/feed/" target="_blank"><i className="icon-rss" /></a></li>
                          </ul>
                        </div>
                      </section>
                    </div>
                  </aside>
                  <div className="clearfix" />
                </div>{/* End the-main-container */}
              </div>{/* End top-footer */}
              <div className="bottom-footer">
                <div className="the-main-container">
                  <p className="credits">© 2022 Discy. All Rights Reserved<br />With Love by <a href="https://2code.info/" target="_blank">2code</a></p>
                </div>
              </div>
            </div>
          </footer>
        </div>
        <div className="go-up" style={{ right: 20 }}><i className="icon-up-open-big" /></div>
        <div className="dark-light-switcher dark-light-switcher-2 dark-switcher">
          <input type="checkbox" className="switcher-dark switcher-dark-checked" /><span /></div>
      </div>

    </div>
  );
}

export default App;
