




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>bootstrap-calendar/js/calendar.js at master · Serhioromano/bootstrap-calendar</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="Serhioromano/bootstrap-calendar" name="twitter:title" /><meta content="bootstrap-calendar - Full view calendar with year, month, week and day views based on templates with Twitter Bootstrap." name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/650741?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/650741?s=400" property="og:image" /><meta content="Serhioromano/bootstrap-calendar" property="og:title" /><meta content="https://github.com/Serhioromano/bootstrap-calendar" property="og:url" /><meta content="bootstrap-calendar - Full view calendar with year, month, week and day views based on templates with Twitter Bootstrap." property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="7AAB7BB9:01FD:1480BD4A:53A94301" name="octolytics-dimension-request_id" /><meta content="4734837" name="octolytics-actor-id" /><meta content="anupam1729" name="octolytics-actor-login" /><meta content="880850f31361ee8da48a873a009f485150482233176420ff10674894b8e3ced0" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico" />


    <meta content="authenticity_token" name="csrf-param" />
<meta content="swV8MnKeEUilFJsstPiYnwff870HzUbuk7XNIDi6jsC52dDaigCMBEnVxNRv1n1E2U0pQ0rv/Kms8R7/ib+ITg==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-38e184196414b8b76b95e8a86f017df0f46ae71e.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-56a4b5fe77cda9c841a8bc19ebf8edd02bb3b0ea.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="b6052cc0aafadbf8a42a64c495c3d258">

      
  <meta name="description" content="bootstrap-calendar - Full view calendar with year, month, week and day views based on templates with Twitter Bootstrap." />


  <meta content="650741" name="octolytics-dimension-user_id" /><meta content="Serhioromano" name="octolytics-dimension-user_login" /><meta content="8751770" name="octolytics-dimension-repository_id" /><meta content="Serhioromano/bootstrap-calendar" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="8751770" name="octolytics-dimension-repository_network_root_id" /><meta content="Serhioromano/bootstrap-calendar" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/Serhioromano/bootstrap-calendar/commits/master.atom" rel="alternate" title="Recent Commits to bootstrap-calendar:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


    
    <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s" data-hotkey="g n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="anupam1729"
      data-repo="Serhioromano/bootstrap-calendar"
      data-branch="master"
      data-sha="b1c022b5bd5b8db78642328904a760af00d03f89"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="Serhioromano/bootstrap-calendar" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/anupam1729" class="name">
        <img alt="anupam1729" class=" js-avatar" data-user="4734837" height="20" src="https://avatars1.githubusercontent.com/u/4734837?s=140" width="20" /> anupam1729
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <form class="logout-form" action="/logout" method="post">
        <button class="sign-out-button tooltipped tooltipped-s" aria-label="Sign out">
          <span class="octicon octicon-sign-out"></span>
        </button>
      </form>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="Serhioromano/bootstrap-calendar">This repository</span>
    </li>
      <li>
        <a href="/Serhioromano/bootstrap-calendar/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="Zl+ddVLTi6+9uvUJnwI8iWTSlC++WODqaqThEVDA6S80Sz45BeGO0IJ6wRXcsq5rpqt35rDvrGOwrisPXSEDVQ==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="8751770" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/Serhioromano/bootstrap-calendar/watchers">
        94
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-x js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    

  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/Serhioromano/bootstrap-calendar/unstar" class="js-toggler-form starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="hyZ6ugEnD1zC+xOsTZfMGnIokl3MEvPAuLygoXquhzzhS7L9Q+HoTfDrjSkBUywFos36FG/VRh7wxFuuelzXxQ==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar Serhioromano/bootstrap-calendar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/Serhioromano/bootstrap-calendar/stargazers">
          710
        </a>
</form>
    <form accept-charset="UTF-8" action="/Serhioromano/bootstrap-calendar/star" class="js-toggler-form unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="FaSaQgPmLQNxHcbruZUdqqaUO52ze+LacJDJhG/SCTnoIeysllf1qLw1AcDlijXvgCewolNxcggFo5VzXw77/A==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star Serhioromano/bootstrap-calendar">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/Serhioromano/bootstrap-calendar/stargazers">
          710
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/Serhioromano/bootstrap-calendar/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of Serhioromano/bootstrap-calendar to your account" aria-label="Fork your own copy of Serhioromano/bootstrap-calendar to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/Serhioromano/bootstrap-calendar/network" class="social-count">392</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/Serhioromano" class="url fn" itemprop="url" rel="author"><span itemprop="title">Serhioromano</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/Serhioromano/bootstrap-calendar" class="js-current-repository js-repo-home-link">bootstrap-calendar</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/Serhioromano/bootstrap-calendar" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /Serhioromano/bootstrap-calendar">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/Serhioromano/bootstrap-calendar/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues /Serhioromano/bootstrap-calendar/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>72</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/Serhioromano/bootstrap-calendar/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /Serhioromano/bootstrap-calendar/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>7</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/Serhioromano/bootstrap-calendar/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /Serhioromano/bootstrap-calendar/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/Serhioromano/bootstrap-calendar/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /Serhioromano/bootstrap-calendar/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/Serhioromano/bootstrap-calendar/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /Serhioromano/bootstrap-calendar/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/Serhioromano/bootstrap-calendar/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /Serhioromano/bootstrap-calendar/network">
          <span class="octicon octicon-repo-forked"></span> <span class="full-word">Network</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/Serhioromano/bootstrap-calendar.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/Serhioromano/bootstrap-calendar.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:Serhioromano/bootstrap-calendar.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:Serhioromano/bootstrap-calendar.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/Serhioromano/bootstrap-calendar" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/Serhioromano/bootstrap-calendar" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="github-windows://openRepo/https://github.com/Serhioromano/bootstrap-calendar" class="minibutton sidebar-button" title="Save Serhioromano/bootstrap-calendar to your computer and use it in GitHub Desktop." aria-label="Save Serhioromano/bootstrap-calendar to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/Serhioromano/bootstrap-calendar/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download Serhioromano/bootstrap-calendar as a zip file"
                   title="Download Serhioromano/bootstrap-calendar as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/Serhioromano/bootstrap-calendar/blob/c9c7cb8b24786feb786c1ab6c750e5071f1ceef6/js/calendar.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:3089c3d9575373699d5f4b2634a6bce4 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Serhioromano/bootstrap-calendar/blob/master/js/calendar.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Serhioromano/bootstrap-calendar/tree/v0.2.0-RC/js/calendar.js"
                 data-name="v0.2.0-RC"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.2.0-RC">v0.2.0-RC</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Serhioromano/bootstrap-calendar/tree/v0.1.1-RC/js/calendar.js"
                 data-name="v0.1.1-RC"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.1.1-RC">v0.1.1-RC</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Serhioromano/bootstrap-calendar/tree/v0.1.0-beta/js/calendar.js"
                 data-name="v0.1.0-beta"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.1.0-beta">v0.1.0-beta</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Serhioromano/bootstrap-calendar/tree/v0.0.9-beta/js/calendar.js"
                 data-name="v0.0.9-beta"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.0.9-beta">v0.0.9-beta</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Serhioromano/bootstrap-calendar/tree/0.2.3/js/calendar.js"
                 data-name="0.2.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.2.3">0.2.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Serhioromano/bootstrap-calendar/tree/0.2.2/js/calendar.js"
                 data-name="0.2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.2.2">0.2.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Serhioromano/bootstrap-calendar/tree/0.0.9/js/calendar.js"
                 data-name="0.0.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.0.9">0.0.9</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/Serhioromano/bootstrap-calendar/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="js/calendar.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/Serhioromano/bootstrap-calendar" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">bootstrap-calendar</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/Serhioromano/bootstrap-calendar/tree/master/js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator"> / </span><strong class="final-path">calendar.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
      <img alt="Sebastian Klatte" class="main-avatar js-avatar" data-user="6826752" height="24" src="https://avatars3.githubusercontent.com/u/6826752?s=140" width="24" />
      <span class="author"><a href="/geskill" rel="contributor">geskill</a></span>
      <time datetime="2014-05-22T23:31:13+02:00" is="relative-time">May 22, 2014</time>
      <div class="commit-title">
          <a href="/Serhioromano/bootstrap-calendar/commit/e376a0d8461fae40289548bb53f1eb5f8154fe00" class="message" data-pjax="true" title="fix for very short events">fix for very short events</a>
      </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>14</strong>  contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="Serhioromano" href="/Serhioromano/bootstrap-calendar/commits/master/js/calendar.js?author=Serhioromano"><img alt="Sergey Romanov" class=" js-avatar" data-user="650741" height="20" src="https://avatars3.githubusercontent.com/u/650741?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="mlocati" href="/Serhioromano/bootstrap-calendar/commits/master/js/calendar.js?author=mlocati"><img alt="Michele Locati" class=" js-avatar" data-user="928116" height="20" src="https://avatars1.githubusercontent.com/u/928116?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="steliosph" href="/Serhioromano/bootstrap-calendar/commits/master/js/calendar.js?author=steliosph"><img alt="Stelios Philippou" class=" js-avatar" data-user="3367401" height="20" src="https://avatars2.githubusercontent.com/u/3367401?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="geskill" href="/Serhioromano/bootstrap-calendar/commits/master/js/calendar.js?author=geskill"><img alt="Sebastian Klatte" class=" js-avatar" data-user="6826752" height="20" src="https://avatars3.githubusercontent.com/u/6826752?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="alfredbez" href="/Serhioromano/bootstrap-calendar/commits/master/js/calendar.js?author=alfredbez"><img alt="Alfred Bez" class=" js-avatar" data-user="1001186" height="20" src="https://avatars1.githubusercontent.com/u/1001186?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="Ciul" href="/Serhioromano/bootstrap-calendar/commits/master/js/calendar.js?author=Ciul"><img alt="Luis Carlos Osorio Jayk" class=" js-avatar" data-user="504085" height="20" src="https://avatars2.githubusercontent.com/u/504085?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="bilus" href="/Serhioromano/bootstrap-calendar/commits/master/js/calendar.js?author=bilus"><img alt="bilus" class=" js-avatar" data-user="1025537" height="20" src="https://avatars0.githubusercontent.com/u/1025537?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="izar-cz" href="/Serhioromano/bootstrap-calendar/commits/master/js/calendar.js?author=izar-cz"><img alt="izar-cz" class=" js-avatar" data-user="3982875" height="20" src="https://avatars3.githubusercontent.com/u/3982875?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="GuiSevero" href="/Serhioromano/bootstrap-calendar/commits/master/js/calendar.js?author=GuiSevero"><img alt="Guilherme Severo" class=" js-avatar" data-user="2412494" height="20" src="https://avatars3.githubusercontent.com/u/2412494?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="gausie" href="/Serhioromano/bootstrap-calendar/commits/master/js/calendar.js?author=gausie"><img alt="Samuel Gaus" class=" js-avatar" data-user="179758" height="20" src="https://avatars2.githubusercontent.com/u/179758?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="mauromorello" href="/Serhioromano/bootstrap-calendar/commits/master/js/calendar.js?author=mauromorello"><img alt="mauromorello" class=" js-avatar" data-user="3259982" height="20" src="https://avatars0.githubusercontent.com/u/3259982?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="davidfischer-ch" href="/Serhioromano/bootstrap-calendar/commits/master/js/calendar.js?author=davidfischer-ch"><img alt="David Fischer" class=" js-avatar" data-user="829615" height="20" src="https://avatars0.githubusercontent.com/u/829615?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="andreiavram" href="/Serhioromano/bootstrap-calendar/commits/master/js/calendar.js?author=andreiavram"><img alt="Andrei Avram" class=" js-avatar" data-user="2837718" height="20" src="https://avatars3.githubusercontent.com/u/2837718?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="smoreau" href="/Serhioromano/bootstrap-calendar/commits/master/js/calendar.js?author=smoreau"><img alt="Stéphane Moreau" class=" js-avatar" data-user="1629624" height="20" src="https://avatars0.githubusercontent.com/u/1629624?s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Sergey Romanov" class=" js-avatar" data-user="650741" height="24" src="https://avatars3.githubusercontent.com/u/650741?s=140" width="24" />
            <a href="/Serhioromano">Serhioromano</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Michele Locati" class=" js-avatar" data-user="928116" height="24" src="https://avatars1.githubusercontent.com/u/928116?s=140" width="24" />
            <a href="/mlocati">mlocati</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Stelios Philippou" class=" js-avatar" data-user="3367401" height="24" src="https://avatars2.githubusercontent.com/u/3367401?s=140" width="24" />
            <a href="/steliosph">steliosph</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Sebastian Klatte" class=" js-avatar" data-user="6826752" height="24" src="https://avatars3.githubusercontent.com/u/6826752?s=140" width="24" />
            <a href="/geskill">geskill</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Alfred Bez" class=" js-avatar" data-user="1001186" height="24" src="https://avatars1.githubusercontent.com/u/1001186?s=140" width="24" />
            <a href="/alfredbez">alfredbez</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Luis Carlos Osorio Jayk" class=" js-avatar" data-user="504085" height="24" src="https://avatars2.githubusercontent.com/u/504085?s=140" width="24" />
            <a href="/Ciul">Ciul</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="bilus" class=" js-avatar" data-user="1025537" height="24" src="https://avatars0.githubusercontent.com/u/1025537?s=140" width="24" />
            <a href="/bilus">bilus</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="izar-cz" class=" js-avatar" data-user="3982875" height="24" src="https://avatars3.githubusercontent.com/u/3982875?s=140" width="24" />
            <a href="/izar-cz">izar-cz</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Guilherme Severo" class=" js-avatar" data-user="2412494" height="24" src="https://avatars3.githubusercontent.com/u/2412494?s=140" width="24" />
            <a href="/GuiSevero">GuiSevero</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Samuel Gaus" class=" js-avatar" data-user="179758" height="24" src="https://avatars2.githubusercontent.com/u/179758?s=140" width="24" />
            <a href="/gausie">gausie</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="mauromorello" class=" js-avatar" data-user="3259982" height="24" src="https://avatars0.githubusercontent.com/u/3259982?s=140" width="24" />
            <a href="/mauromorello">mauromorello</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="David Fischer" class=" js-avatar" data-user="829615" height="24" src="https://avatars0.githubusercontent.com/u/829615?s=140" width="24" />
            <a href="/davidfischer-ch">davidfischer-ch</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Andrei Avram" class=" js-avatar" data-user="2837718" height="24" src="https://avatars3.githubusercontent.com/u/2837718?s=140" width="24" />
            <a href="/andreiavram">andreiavram</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Stéphane Moreau" class=" js-avatar" data-user="1629624" height="24" src="https://avatars0.githubusercontent.com/u/1629624?s=140" width="24" />
            <a href="/smoreau">smoreau</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>1191 lines (1052 sloc)</span>
          <span class="meta-divider"></span>
        <span>34.324 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w"
               href="github-windows://openRepo/https://github.com/Serhioromano/bootstrap-calendar?branch=master&amp;filepath=js%2Fcalendar.js" aria-label="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/Serhioromano/bootstrap-calendar/edit/master/js/calendar.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/Serhioromano/bootstrap-calendar/raw/master/js/calendar.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/Serhioromano/bootstrap-calendar/blame/master/js/calendar.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/Serhioromano/bootstrap-calendar/commits/master/js/calendar.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

            <a class="minibutton danger empty-icon tooltipped tooltipped-s"
               href="/Serhioromano/bootstrap-calendar/delete/master/js/calendar.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">

          Delete
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript js-blob-data">
       <table class="file-code file-diff tab-size-8">
         <tr class="file-code-line">
           <td class="blob-line-nums">
             <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>
<span id="L705" rel="#L705">705</span>
<span id="L706" rel="#L706">706</span>
<span id="L707" rel="#L707">707</span>
<span id="L708" rel="#L708">708</span>
<span id="L709" rel="#L709">709</span>
<span id="L710" rel="#L710">710</span>
<span id="L711" rel="#L711">711</span>
<span id="L712" rel="#L712">712</span>
<span id="L713" rel="#L713">713</span>
<span id="L714" rel="#L714">714</span>
<span id="L715" rel="#L715">715</span>
<span id="L716" rel="#L716">716</span>
<span id="L717" rel="#L717">717</span>
<span id="L718" rel="#L718">718</span>
<span id="L719" rel="#L719">719</span>
<span id="L720" rel="#L720">720</span>
<span id="L721" rel="#L721">721</span>
<span id="L722" rel="#L722">722</span>
<span id="L723" rel="#L723">723</span>
<span id="L724" rel="#L724">724</span>
<span id="L725" rel="#L725">725</span>
<span id="L726" rel="#L726">726</span>
<span id="L727" rel="#L727">727</span>
<span id="L728" rel="#L728">728</span>
<span id="L729" rel="#L729">729</span>
<span id="L730" rel="#L730">730</span>
<span id="L731" rel="#L731">731</span>
<span id="L732" rel="#L732">732</span>
<span id="L733" rel="#L733">733</span>
<span id="L734" rel="#L734">734</span>
<span id="L735" rel="#L735">735</span>
<span id="L736" rel="#L736">736</span>
<span id="L737" rel="#L737">737</span>
<span id="L738" rel="#L738">738</span>
<span id="L739" rel="#L739">739</span>
<span id="L740" rel="#L740">740</span>
<span id="L741" rel="#L741">741</span>
<span id="L742" rel="#L742">742</span>
<span id="L743" rel="#L743">743</span>
<span id="L744" rel="#L744">744</span>
<span id="L745" rel="#L745">745</span>
<span id="L746" rel="#L746">746</span>
<span id="L747" rel="#L747">747</span>
<span id="L748" rel="#L748">748</span>
<span id="L749" rel="#L749">749</span>
<span id="L750" rel="#L750">750</span>
<span id="L751" rel="#L751">751</span>
<span id="L752" rel="#L752">752</span>
<span id="L753" rel="#L753">753</span>
<span id="L754" rel="#L754">754</span>
<span id="L755" rel="#L755">755</span>
<span id="L756" rel="#L756">756</span>
<span id="L757" rel="#L757">757</span>
<span id="L758" rel="#L758">758</span>
<span id="L759" rel="#L759">759</span>
<span id="L760" rel="#L760">760</span>
<span id="L761" rel="#L761">761</span>
<span id="L762" rel="#L762">762</span>
<span id="L763" rel="#L763">763</span>
<span id="L764" rel="#L764">764</span>
<span id="L765" rel="#L765">765</span>
<span id="L766" rel="#L766">766</span>
<span id="L767" rel="#L767">767</span>
<span id="L768" rel="#L768">768</span>
<span id="L769" rel="#L769">769</span>
<span id="L770" rel="#L770">770</span>
<span id="L771" rel="#L771">771</span>
<span id="L772" rel="#L772">772</span>
<span id="L773" rel="#L773">773</span>
<span id="L774" rel="#L774">774</span>
<span id="L775" rel="#L775">775</span>
<span id="L776" rel="#L776">776</span>
<span id="L777" rel="#L777">777</span>
<span id="L778" rel="#L778">778</span>
<span id="L779" rel="#L779">779</span>
<span id="L780" rel="#L780">780</span>
<span id="L781" rel="#L781">781</span>
<span id="L782" rel="#L782">782</span>
<span id="L783" rel="#L783">783</span>
<span id="L784" rel="#L784">784</span>
<span id="L785" rel="#L785">785</span>
<span id="L786" rel="#L786">786</span>
<span id="L787" rel="#L787">787</span>
<span id="L788" rel="#L788">788</span>
<span id="L789" rel="#L789">789</span>
<span id="L790" rel="#L790">790</span>
<span id="L791" rel="#L791">791</span>
<span id="L792" rel="#L792">792</span>
<span id="L793" rel="#L793">793</span>
<span id="L794" rel="#L794">794</span>
<span id="L795" rel="#L795">795</span>
<span id="L796" rel="#L796">796</span>
<span id="L797" rel="#L797">797</span>
<span id="L798" rel="#L798">798</span>
<span id="L799" rel="#L799">799</span>
<span id="L800" rel="#L800">800</span>
<span id="L801" rel="#L801">801</span>
<span id="L802" rel="#L802">802</span>
<span id="L803" rel="#L803">803</span>
<span id="L804" rel="#L804">804</span>
<span id="L805" rel="#L805">805</span>
<span id="L806" rel="#L806">806</span>
<span id="L807" rel="#L807">807</span>
<span id="L808" rel="#L808">808</span>
<span id="L809" rel="#L809">809</span>
<span id="L810" rel="#L810">810</span>
<span id="L811" rel="#L811">811</span>
<span id="L812" rel="#L812">812</span>
<span id="L813" rel="#L813">813</span>
<span id="L814" rel="#L814">814</span>
<span id="L815" rel="#L815">815</span>
<span id="L816" rel="#L816">816</span>
<span id="L817" rel="#L817">817</span>
<span id="L818" rel="#L818">818</span>
<span id="L819" rel="#L819">819</span>
<span id="L820" rel="#L820">820</span>
<span id="L821" rel="#L821">821</span>
<span id="L822" rel="#L822">822</span>
<span id="L823" rel="#L823">823</span>
<span id="L824" rel="#L824">824</span>
<span id="L825" rel="#L825">825</span>
<span id="L826" rel="#L826">826</span>
<span id="L827" rel="#L827">827</span>
<span id="L828" rel="#L828">828</span>
<span id="L829" rel="#L829">829</span>
<span id="L830" rel="#L830">830</span>
<span id="L831" rel="#L831">831</span>
<span id="L832" rel="#L832">832</span>
<span id="L833" rel="#L833">833</span>
<span id="L834" rel="#L834">834</span>
<span id="L835" rel="#L835">835</span>
<span id="L836" rel="#L836">836</span>
<span id="L837" rel="#L837">837</span>
<span id="L838" rel="#L838">838</span>
<span id="L839" rel="#L839">839</span>
<span id="L840" rel="#L840">840</span>
<span id="L841" rel="#L841">841</span>
<span id="L842" rel="#L842">842</span>
<span id="L843" rel="#L843">843</span>
<span id="L844" rel="#L844">844</span>
<span id="L845" rel="#L845">845</span>
<span id="L846" rel="#L846">846</span>
<span id="L847" rel="#L847">847</span>
<span id="L848" rel="#L848">848</span>
<span id="L849" rel="#L849">849</span>
<span id="L850" rel="#L850">850</span>
<span id="L851" rel="#L851">851</span>
<span id="L852" rel="#L852">852</span>
<span id="L853" rel="#L853">853</span>
<span id="L854" rel="#L854">854</span>
<span id="L855" rel="#L855">855</span>
<span id="L856" rel="#L856">856</span>
<span id="L857" rel="#L857">857</span>
<span id="L858" rel="#L858">858</span>
<span id="L859" rel="#L859">859</span>
<span id="L860" rel="#L860">860</span>
<span id="L861" rel="#L861">861</span>
<span id="L862" rel="#L862">862</span>
<span id="L863" rel="#L863">863</span>
<span id="L864" rel="#L864">864</span>
<span id="L865" rel="#L865">865</span>
<span id="L866" rel="#L866">866</span>
<span id="L867" rel="#L867">867</span>
<span id="L868" rel="#L868">868</span>
<span id="L869" rel="#L869">869</span>
<span id="L870" rel="#L870">870</span>
<span id="L871" rel="#L871">871</span>
<span id="L872" rel="#L872">872</span>
<span id="L873" rel="#L873">873</span>
<span id="L874" rel="#L874">874</span>
<span id="L875" rel="#L875">875</span>
<span id="L876" rel="#L876">876</span>
<span id="L877" rel="#L877">877</span>
<span id="L878" rel="#L878">878</span>
<span id="L879" rel="#L879">879</span>
<span id="L880" rel="#L880">880</span>
<span id="L881" rel="#L881">881</span>
<span id="L882" rel="#L882">882</span>
<span id="L883" rel="#L883">883</span>
<span id="L884" rel="#L884">884</span>
<span id="L885" rel="#L885">885</span>
<span id="L886" rel="#L886">886</span>
<span id="L887" rel="#L887">887</span>
<span id="L888" rel="#L888">888</span>
<span id="L889" rel="#L889">889</span>
<span id="L890" rel="#L890">890</span>
<span id="L891" rel="#L891">891</span>
<span id="L892" rel="#L892">892</span>
<span id="L893" rel="#L893">893</span>
<span id="L894" rel="#L894">894</span>
<span id="L895" rel="#L895">895</span>
<span id="L896" rel="#L896">896</span>
<span id="L897" rel="#L897">897</span>
<span id="L898" rel="#L898">898</span>
<span id="L899" rel="#L899">899</span>
<span id="L900" rel="#L900">900</span>
<span id="L901" rel="#L901">901</span>
<span id="L902" rel="#L902">902</span>
<span id="L903" rel="#L903">903</span>
<span id="L904" rel="#L904">904</span>
<span id="L905" rel="#L905">905</span>
<span id="L906" rel="#L906">906</span>
<span id="L907" rel="#L907">907</span>
<span id="L908" rel="#L908">908</span>
<span id="L909" rel="#L909">909</span>
<span id="L910" rel="#L910">910</span>
<span id="L911" rel="#L911">911</span>
<span id="L912" rel="#L912">912</span>
<span id="L913" rel="#L913">913</span>
<span id="L914" rel="#L914">914</span>
<span id="L915" rel="#L915">915</span>
<span id="L916" rel="#L916">916</span>
<span id="L917" rel="#L917">917</span>
<span id="L918" rel="#L918">918</span>
<span id="L919" rel="#L919">919</span>
<span id="L920" rel="#L920">920</span>
<span id="L921" rel="#L921">921</span>
<span id="L922" rel="#L922">922</span>
<span id="L923" rel="#L923">923</span>
<span id="L924" rel="#L924">924</span>
<span id="L925" rel="#L925">925</span>
<span id="L926" rel="#L926">926</span>
<span id="L927" rel="#L927">927</span>
<span id="L928" rel="#L928">928</span>
<span id="L929" rel="#L929">929</span>
<span id="L930" rel="#L930">930</span>
<span id="L931" rel="#L931">931</span>
<span id="L932" rel="#L932">932</span>
<span id="L933" rel="#L933">933</span>
<span id="L934" rel="#L934">934</span>
<span id="L935" rel="#L935">935</span>
<span id="L936" rel="#L936">936</span>
<span id="L937" rel="#L937">937</span>
<span id="L938" rel="#L938">938</span>
<span id="L939" rel="#L939">939</span>
<span id="L940" rel="#L940">940</span>
<span id="L941" rel="#L941">941</span>
<span id="L942" rel="#L942">942</span>
<span id="L943" rel="#L943">943</span>
<span id="L944" rel="#L944">944</span>
<span id="L945" rel="#L945">945</span>
<span id="L946" rel="#L946">946</span>
<span id="L947" rel="#L947">947</span>
<span id="L948" rel="#L948">948</span>
<span id="L949" rel="#L949">949</span>
<span id="L950" rel="#L950">950</span>
<span id="L951" rel="#L951">951</span>
<span id="L952" rel="#L952">952</span>
<span id="L953" rel="#L953">953</span>
<span id="L954" rel="#L954">954</span>
<span id="L955" rel="#L955">955</span>
<span id="L956" rel="#L956">956</span>
<span id="L957" rel="#L957">957</span>
<span id="L958" rel="#L958">958</span>
<span id="L959" rel="#L959">959</span>
<span id="L960" rel="#L960">960</span>
<span id="L961" rel="#L961">961</span>
<span id="L962" rel="#L962">962</span>
<span id="L963" rel="#L963">963</span>
<span id="L964" rel="#L964">964</span>
<span id="L965" rel="#L965">965</span>
<span id="L966" rel="#L966">966</span>
<span id="L967" rel="#L967">967</span>
<span id="L968" rel="#L968">968</span>
<span id="L969" rel="#L969">969</span>
<span id="L970" rel="#L970">970</span>
<span id="L971" rel="#L971">971</span>
<span id="L972" rel="#L972">972</span>
<span id="L973" rel="#L973">973</span>
<span id="L974" rel="#L974">974</span>
<span id="L975" rel="#L975">975</span>
<span id="L976" rel="#L976">976</span>
<span id="L977" rel="#L977">977</span>
<span id="L978" rel="#L978">978</span>
<span id="L979" rel="#L979">979</span>
<span id="L980" rel="#L980">980</span>
<span id="L981" rel="#L981">981</span>
<span id="L982" rel="#L982">982</span>
<span id="L983" rel="#L983">983</span>
<span id="L984" rel="#L984">984</span>
<span id="L985" rel="#L985">985</span>
<span id="L986" rel="#L986">986</span>
<span id="L987" rel="#L987">987</span>
<span id="L988" rel="#L988">988</span>
<span id="L989" rel="#L989">989</span>
<span id="L990" rel="#L990">990</span>
<span id="L991" rel="#L991">991</span>
<span id="L992" rel="#L992">992</span>
<span id="L993" rel="#L993">993</span>
<span id="L994" rel="#L994">994</span>
<span id="L995" rel="#L995">995</span>
<span id="L996" rel="#L996">996</span>
<span id="L997" rel="#L997">997</span>
<span id="L998" rel="#L998">998</span>
<span id="L999" rel="#L999">999</span>
<span id="L1000" rel="#L1000">1000</span>
<span id="L1001" rel="#L1001">1001</span>
<span id="L1002" rel="#L1002">1002</span>
<span id="L1003" rel="#L1003">1003</span>
<span id="L1004" rel="#L1004">1004</span>
<span id="L1005" rel="#L1005">1005</span>
<span id="L1006" rel="#L1006">1006</span>
<span id="L1007" rel="#L1007">1007</span>
<span id="L1008" rel="#L1008">1008</span>
<span id="L1009" rel="#L1009">1009</span>
<span id="L1010" rel="#L1010">1010</span>
<span id="L1011" rel="#L1011">1011</span>
<span id="L1012" rel="#L1012">1012</span>
<span id="L1013" rel="#L1013">1013</span>
<span id="L1014" rel="#L1014">1014</span>
<span id="L1015" rel="#L1015">1015</span>
<span id="L1016" rel="#L1016">1016</span>
<span id="L1017" rel="#L1017">1017</span>
<span id="L1018" rel="#L1018">1018</span>
<span id="L1019" rel="#L1019">1019</span>
<span id="L1020" rel="#L1020">1020</span>
<span id="L1021" rel="#L1021">1021</span>
<span id="L1022" rel="#L1022">1022</span>
<span id="L1023" rel="#L1023">1023</span>
<span id="L1024" rel="#L1024">1024</span>
<span id="L1025" rel="#L1025">1025</span>
<span id="L1026" rel="#L1026">1026</span>
<span id="L1027" rel="#L1027">1027</span>
<span id="L1028" rel="#L1028">1028</span>
<span id="L1029" rel="#L1029">1029</span>
<span id="L1030" rel="#L1030">1030</span>
<span id="L1031" rel="#L1031">1031</span>
<span id="L1032" rel="#L1032">1032</span>
<span id="L1033" rel="#L1033">1033</span>
<span id="L1034" rel="#L1034">1034</span>
<span id="L1035" rel="#L1035">1035</span>
<span id="L1036" rel="#L1036">1036</span>
<span id="L1037" rel="#L1037">1037</span>
<span id="L1038" rel="#L1038">1038</span>
<span id="L1039" rel="#L1039">1039</span>
<span id="L1040" rel="#L1040">1040</span>
<span id="L1041" rel="#L1041">1041</span>
<span id="L1042" rel="#L1042">1042</span>
<span id="L1043" rel="#L1043">1043</span>
<span id="L1044" rel="#L1044">1044</span>
<span id="L1045" rel="#L1045">1045</span>
<span id="L1046" rel="#L1046">1046</span>
<span id="L1047" rel="#L1047">1047</span>
<span id="L1048" rel="#L1048">1048</span>
<span id="L1049" rel="#L1049">1049</span>
<span id="L1050" rel="#L1050">1050</span>
<span id="L1051" rel="#L1051">1051</span>
<span id="L1052" rel="#L1052">1052</span>
<span id="L1053" rel="#L1053">1053</span>
<span id="L1054" rel="#L1054">1054</span>
<span id="L1055" rel="#L1055">1055</span>
<span id="L1056" rel="#L1056">1056</span>
<span id="L1057" rel="#L1057">1057</span>
<span id="L1058" rel="#L1058">1058</span>
<span id="L1059" rel="#L1059">1059</span>
<span id="L1060" rel="#L1060">1060</span>
<span id="L1061" rel="#L1061">1061</span>
<span id="L1062" rel="#L1062">1062</span>
<span id="L1063" rel="#L1063">1063</span>
<span id="L1064" rel="#L1064">1064</span>
<span id="L1065" rel="#L1065">1065</span>
<span id="L1066" rel="#L1066">1066</span>
<span id="L1067" rel="#L1067">1067</span>
<span id="L1068" rel="#L1068">1068</span>
<span id="L1069" rel="#L1069">1069</span>
<span id="L1070" rel="#L1070">1070</span>
<span id="L1071" rel="#L1071">1071</span>
<span id="L1072" rel="#L1072">1072</span>
<span id="L1073" rel="#L1073">1073</span>
<span id="L1074" rel="#L1074">1074</span>
<span id="L1075" rel="#L1075">1075</span>
<span id="L1076" rel="#L1076">1076</span>
<span id="L1077" rel="#L1077">1077</span>
<span id="L1078" rel="#L1078">1078</span>
<span id="L1079" rel="#L1079">1079</span>
<span id="L1080" rel="#L1080">1080</span>
<span id="L1081" rel="#L1081">1081</span>
<span id="L1082" rel="#L1082">1082</span>
<span id="L1083" rel="#L1083">1083</span>
<span id="L1084" rel="#L1084">1084</span>
<span id="L1085" rel="#L1085">1085</span>
<span id="L1086" rel="#L1086">1086</span>
<span id="L1087" rel="#L1087">1087</span>
<span id="L1088" rel="#L1088">1088</span>
<span id="L1089" rel="#L1089">1089</span>
<span id="L1090" rel="#L1090">1090</span>
<span id="L1091" rel="#L1091">1091</span>
<span id="L1092" rel="#L1092">1092</span>
<span id="L1093" rel="#L1093">1093</span>
<span id="L1094" rel="#L1094">1094</span>
<span id="L1095" rel="#L1095">1095</span>
<span id="L1096" rel="#L1096">1096</span>
<span id="L1097" rel="#L1097">1097</span>
<span id="L1098" rel="#L1098">1098</span>
<span id="L1099" rel="#L1099">1099</span>
<span id="L1100" rel="#L1100">1100</span>
<span id="L1101" rel="#L1101">1101</span>
<span id="L1102" rel="#L1102">1102</span>
<span id="L1103" rel="#L1103">1103</span>
<span id="L1104" rel="#L1104">1104</span>
<span id="L1105" rel="#L1105">1105</span>
<span id="L1106" rel="#L1106">1106</span>
<span id="L1107" rel="#L1107">1107</span>
<span id="L1108" rel="#L1108">1108</span>
<span id="L1109" rel="#L1109">1109</span>
<span id="L1110" rel="#L1110">1110</span>
<span id="L1111" rel="#L1111">1111</span>
<span id="L1112" rel="#L1112">1112</span>
<span id="L1113" rel="#L1113">1113</span>
<span id="L1114" rel="#L1114">1114</span>
<span id="L1115" rel="#L1115">1115</span>
<span id="L1116" rel="#L1116">1116</span>
<span id="L1117" rel="#L1117">1117</span>
<span id="L1118" rel="#L1118">1118</span>
<span id="L1119" rel="#L1119">1119</span>
<span id="L1120" rel="#L1120">1120</span>
<span id="L1121" rel="#L1121">1121</span>
<span id="L1122" rel="#L1122">1122</span>
<span id="L1123" rel="#L1123">1123</span>
<span id="L1124" rel="#L1124">1124</span>
<span id="L1125" rel="#L1125">1125</span>
<span id="L1126" rel="#L1126">1126</span>
<span id="L1127" rel="#L1127">1127</span>
<span id="L1128" rel="#L1128">1128</span>
<span id="L1129" rel="#L1129">1129</span>
<span id="L1130" rel="#L1130">1130</span>
<span id="L1131" rel="#L1131">1131</span>
<span id="L1132" rel="#L1132">1132</span>
<span id="L1133" rel="#L1133">1133</span>
<span id="L1134" rel="#L1134">1134</span>
<span id="L1135" rel="#L1135">1135</span>
<span id="L1136" rel="#L1136">1136</span>
<span id="L1137" rel="#L1137">1137</span>
<span id="L1138" rel="#L1138">1138</span>
<span id="L1139" rel="#L1139">1139</span>
<span id="L1140" rel="#L1140">1140</span>
<span id="L1141" rel="#L1141">1141</span>
<span id="L1142" rel="#L1142">1142</span>
<span id="L1143" rel="#L1143">1143</span>
<span id="L1144" rel="#L1144">1144</span>
<span id="L1145" rel="#L1145">1145</span>
<span id="L1146" rel="#L1146">1146</span>
<span id="L1147" rel="#L1147">1147</span>
<span id="L1148" rel="#L1148">1148</span>
<span id="L1149" rel="#L1149">1149</span>
<span id="L1150" rel="#L1150">1150</span>
<span id="L1151" rel="#L1151">1151</span>
<span id="L1152" rel="#L1152">1152</span>
<span id="L1153" rel="#L1153">1153</span>
<span id="L1154" rel="#L1154">1154</span>
<span id="L1155" rel="#L1155">1155</span>
<span id="L1156" rel="#L1156">1156</span>
<span id="L1157" rel="#L1157">1157</span>
<span id="L1158" rel="#L1158">1158</span>
<span id="L1159" rel="#L1159">1159</span>
<span id="L1160" rel="#L1160">1160</span>
<span id="L1161" rel="#L1161">1161</span>
<span id="L1162" rel="#L1162">1162</span>
<span id="L1163" rel="#L1163">1163</span>
<span id="L1164" rel="#L1164">1164</span>
<span id="L1165" rel="#L1165">1165</span>
<span id="L1166" rel="#L1166">1166</span>
<span id="L1167" rel="#L1167">1167</span>
<span id="L1168" rel="#L1168">1168</span>
<span id="L1169" rel="#L1169">1169</span>
<span id="L1170" rel="#L1170">1170</span>
<span id="L1171" rel="#L1171">1171</span>
<span id="L1172" rel="#L1172">1172</span>
<span id="L1173" rel="#L1173">1173</span>
<span id="L1174" rel="#L1174">1174</span>
<span id="L1175" rel="#L1175">1175</span>
<span id="L1176" rel="#L1176">1176</span>
<span id="L1177" rel="#L1177">1177</span>
<span id="L1178" rel="#L1178">1178</span>
<span id="L1179" rel="#L1179">1179</span>
<span id="L1180" rel="#L1180">1180</span>
<span id="L1181" rel="#L1181">1181</span>
<span id="L1182" rel="#L1182">1182</span>
<span id="L1183" rel="#L1183">1183</span>
<span id="L1184" rel="#L1184">1184</span>
<span id="L1185" rel="#L1185">1185</span>
<span id="L1186" rel="#L1186">1186</span>
<span id="L1187" rel="#L1187">1187</span>
<span id="L1188" rel="#L1188">1188</span>
<span id="L1189" rel="#L1189">1189</span>
<span id="L1190" rel="#L1190">1190</span>

           </td>
           <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * Bootstrap based calendar full view.</span></div><div class='line' id='LC3'><span class="cm"> *</span></div><div class='line' id='LC4'><span class="cm"> * https://github.com/Serhioromano/bootstrap-calendar</span></div><div class='line' id='LC5'><span class="cm"> *</span></div><div class='line' id='LC6'><span class="cm"> * User: Sergey Romanov &lt;serg4172@mail.ru&gt;</span></div><div class='line' id='LC7'><span class="cm"> */</span></div><div class='line' id='LC8'><span class="s2">&quot;use strict&quot;</span><span class="p">;</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'><span class="nb">Date</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">getWeek</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC11'>	<span class="kd">var</span> <span class="nx">onejan</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getFullYear</span><span class="p">(),</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC12'>	<span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">((((</span><span class="k">this</span><span class="p">.</span><span class="nx">getTime</span><span class="p">()</span> <span class="o">-</span> <span class="nx">onejan</span><span class="p">.</span><span class="nx">getTime</span><span class="p">())</span> <span class="o">/</span> <span class="mi">86400000</span><span class="p">)</span> <span class="o">+</span> <span class="nx">onejan</span><span class="p">.</span><span class="nx">getDay</span><span class="p">()</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">/</span> <span class="mi">7</span><span class="p">);</span></div><div class='line' id='LC13'><span class="p">};</span></div><div class='line' id='LC14'><span class="nb">Date</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">getMonthFormatted</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC15'>	<span class="kd">var</span> <span class="nx">month</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getMonth</span><span class="p">()</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC16'>	<span class="k">return</span> <span class="nx">month</span> <span class="o">&lt;</span> <span class="mi">10</span> <span class="o">?</span> <span class="s1">&#39;0&#39;</span> <span class="o">+</span> <span class="nx">month</span> <span class="o">:</span> <span class="nx">month</span><span class="p">;</span></div><div class='line' id='LC17'><span class="p">};</span></div><div class='line' id='LC18'><span class="nb">Date</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">getDateFormatted</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC19'>	<span class="kd">var</span> <span class="nx">date</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getDate</span><span class="p">();</span></div><div class='line' id='LC20'>	<span class="k">return</span> <span class="nx">date</span> <span class="o">&lt;</span> <span class="mi">10</span> <span class="o">?</span> <span class="s1">&#39;0&#39;</span> <span class="o">+</span> <span class="nx">date</span> <span class="o">:</span> <span class="nx">date</span><span class="p">;</span></div><div class='line' id='LC21'><span class="p">};</span></div><div class='line' id='LC22'><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nb">String</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">format</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC23'>	<span class="nb">String</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">format</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC24'>		<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">;</span></div><div class='line' id='LC25'>		<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/{(\d+)}/g</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">match</span><span class="p">,</span> <span class="nx">number</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC26'>			<span class="k">return</span> <span class="k">typeof</span> <span class="nx">args</span><span class="p">[</span><span class="nx">number</span><span class="p">]</span> <span class="o">!=</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">?</span> <span class="nx">args</span><span class="p">[</span><span class="nx">number</span><span class="p">]</span> <span class="o">:</span> <span class="nx">match</span><span class="p">;</span></div><div class='line' id='LC27'>		<span class="p">});</span></div><div class='line' id='LC28'>	<span class="p">};</span></div><div class='line' id='LC29'><span class="p">}</span></div><div class='line' id='LC30'><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nb">String</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">formatNum</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC31'>	<span class="nb">String</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">formatNum</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">decimal</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC32'>		<span class="kd">var</span> <span class="nx">r</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span> <span class="o">+</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC33'>		<span class="k">while</span><span class="p">(</span><span class="nx">r</span><span class="p">.</span><span class="nx">length</span> <span class="o">&lt;</span> <span class="nx">decimal</span><span class="p">)</span></div><div class='line' id='LC34'>			<span class="nx">r</span> <span class="o">=</span> <span class="s2">&quot;0&quot;</span> <span class="o">+</span> <span class="nx">r</span><span class="p">;</span></div><div class='line' id='LC35'>		<span class="k">return</span> <span class="nx">r</span><span class="p">;</span></div><div class='line' id='LC36'>	<span class="p">};</span></div><div class='line' id='LC37'><span class="p">}</span></div><div class='line' id='LC38'><br/></div><div class='line' id='LC39'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC40'><br/></div><div class='line' id='LC41'>	<span class="kd">var</span> <span class="nx">defaults</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC42'>		<span class="c1">// Width of the calendar</span></div><div class='line' id='LC43'>		<span class="nx">width</span><span class="o">:</span>              <span class="s1">&#39;100%&#39;</span><span class="p">,</span></div><div class='line' id='LC44'>		<span class="c1">// Initial view (can be &#39;month&#39;, &#39;week&#39;, &#39;day&#39;)</span></div><div class='line' id='LC45'>		<span class="nx">view</span><span class="o">:</span>               <span class="s1">&#39;month&#39;</span><span class="p">,</span></div><div class='line' id='LC46'>		<span class="c1">// Initial date. No matter month, week or day this will be a starting point. Can be &#39;now&#39; or a date in format &#39;yyyy-mm-dd&#39;</span></div><div class='line' id='LC47'>		<span class="nx">day</span><span class="o">:</span>                <span class="s1">&#39;now&#39;</span><span class="p">,</span></div><div class='line' id='LC48'>		<span class="c1">// Day Start time and end time with time intervals. Time split 10, 15 or 30.</span></div><div class='line' id='LC49'>		<span class="nx">time_start</span><span class="o">:</span>         <span class="s1">&#39;06:00&#39;</span><span class="p">,</span></div><div class='line' id='LC50'>		<span class="nx">time_end</span><span class="o">:</span>           <span class="s1">&#39;22:00&#39;</span><span class="p">,</span></div><div class='line' id='LC51'>		<span class="nx">time_split</span><span class="o">:</span>         <span class="s1">&#39;30&#39;</span><span class="p">,</span></div><div class='line' id='LC52'>		<span class="c1">// Source of events data. It can be one of the following:</span></div><div class='line' id='LC53'>		<span class="c1">// - URL to return JSON list of events in special format.</span></div><div class='line' id='LC54'>		<span class="c1">//   {success:1, result: [....]} or for error {success:0, error:&#39;Something terrible happened&#39;}</span></div><div class='line' id='LC55'>		<span class="c1">//   events: [...] as described in events property description</span></div><div class='line' id='LC56'>		<span class="c1">//   The start and end variables will be sent to this url</span></div><div class='line' id='LC57'>		<span class="c1">// - A function that received the start and end date, and that</span></div><div class='line' id='LC58'>		<span class="c1">//   returns an array of events (as described in events property description)</span></div><div class='line' id='LC59'>		<span class="c1">// - An array containing the events</span></div><div class='line' id='LC60'>		<span class="nx">events_source</span><span class="o">:</span>      <span class="s1">&#39;&#39;</span><span class="p">,</span></div><div class='line' id='LC61'>		<span class="c1">// Path to templates should end with slash /. It can be as relative</span></div><div class='line' id='LC62'>		<span class="c1">// /component/bootstrap-calendar/tmpls/</span></div><div class='line' id='LC63'>		<span class="c1">// or absolute</span></div><div class='line' id='LC64'>		<span class="c1">// http://localhost/component/bootstrap-calendar/tmpls/</span></div><div class='line' id='LC65'>		<span class="nx">tmpl_path</span><span class="o">:</span>          <span class="s1">&#39;tmpls/&#39;</span><span class="p">,</span></div><div class='line' id='LC66'>		<span class="nx">tmpl_cache</span><span class="o">:</span>         <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC67'>		<span class="nx">classes</span><span class="o">:</span>            <span class="p">{</span></div><div class='line' id='LC68'>			<span class="nx">months</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC69'>				<span class="nx">inmonth</span><span class="o">:</span>  <span class="s1">&#39;cal-day-inmonth&#39;</span><span class="p">,</span></div><div class='line' id='LC70'>				<span class="nx">outmonth</span><span class="o">:</span> <span class="s1">&#39;cal-day-outmonth&#39;</span><span class="p">,</span></div><div class='line' id='LC71'>				<span class="nx">saturday</span><span class="o">:</span> <span class="s1">&#39;cal-day-weekend&#39;</span><span class="p">,</span></div><div class='line' id='LC72'>				<span class="nx">sunday</span><span class="o">:</span>   <span class="s1">&#39;cal-day-weekend&#39;</span><span class="p">,</span></div><div class='line' id='LC73'>				<span class="nx">holidays</span><span class="o">:</span> <span class="s1">&#39;cal-day-holiday&#39;</span><span class="p">,</span></div><div class='line' id='LC74'>				<span class="nx">today</span><span class="o">:</span>    <span class="s1">&#39;cal-day-today&#39;</span></div><div class='line' id='LC75'>			<span class="p">},</span></div><div class='line' id='LC76'>			<span class="nx">week</span><span class="o">:</span>   <span class="p">{</span></div><div class='line' id='LC77'>				<span class="nx">workday</span><span class="o">:</span>  <span class="s1">&#39;cal-day-workday&#39;</span><span class="p">,</span></div><div class='line' id='LC78'>				<span class="nx">saturday</span><span class="o">:</span> <span class="s1">&#39;cal-day-weekend&#39;</span><span class="p">,</span></div><div class='line' id='LC79'>				<span class="nx">sunday</span><span class="o">:</span>   <span class="s1">&#39;cal-day-weekend&#39;</span><span class="p">,</span></div><div class='line' id='LC80'>				<span class="nx">holidays</span><span class="o">:</span> <span class="s1">&#39;cal-day-holiday&#39;</span><span class="p">,</span></div><div class='line' id='LC81'>				<span class="nx">today</span><span class="o">:</span>    <span class="s1">&#39;cal-day-today&#39;</span></div><div class='line' id='LC82'>			<span class="p">}</span></div><div class='line' id='LC83'>		<span class="p">},</span></div><div class='line' id='LC84'>		<span class="c1">// ID of the element of modal window. If set, events URLs will be opened in modal windows.</span></div><div class='line' id='LC85'>		<span class="nx">modal</span><span class="o">:</span>              <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC86'>		<span class="c1">//	modal handling setting, one of &quot;iframe&quot;, &quot;ajax&quot; or &quot;template&quot;</span></div><div class='line' id='LC87'>		<span class="nx">modal_type</span><span class="o">:</span>         <span class="s2">&quot;iframe&quot;</span><span class="p">,</span></div><div class='line' id='LC88'>		<span class="c1">//	function to set modal title, will be passed the event as a parameter</span></div><div class='line' id='LC89'>		<span class="nx">modal_title</span><span class="o">:</span>        <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC90'>		<span class="nx">views</span><span class="o">:</span>              <span class="p">{</span></div><div class='line' id='LC91'>			<span class="nx">year</span><span class="o">:</span>  <span class="p">{</span></div><div class='line' id='LC92'>				<span class="nx">slide_events</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC93'>				<span class="nx">enable</span><span class="o">:</span>       <span class="mi">1</span></div><div class='line' id='LC94'>			<span class="p">},</span></div><div class='line' id='LC95'>			<span class="nx">month</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC96'>				<span class="nx">slide_events</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC97'>				<span class="nx">enable</span><span class="o">:</span>       <span class="mi">1</span></div><div class='line' id='LC98'>			<span class="p">},</span></div><div class='line' id='LC99'>			<span class="nx">week</span><span class="o">:</span>  <span class="p">{</span></div><div class='line' id='LC100'>				<span class="nx">enable</span><span class="o">:</span> <span class="mi">1</span></div><div class='line' id='LC101'>			<span class="p">},</span></div><div class='line' id='LC102'>			<span class="nx">day</span><span class="o">:</span>   <span class="p">{</span></div><div class='line' id='LC103'>				<span class="nx">enable</span><span class="o">:</span> <span class="mi">1</span></div><div class='line' id='LC104'>			<span class="p">}</span></div><div class='line' id='LC105'>		<span class="p">},</span></div><div class='line' id='LC106'>		<span class="nx">merge_holidays</span><span class="o">:</span>     <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC107'>		<span class="c1">// ------------------------------------------------------------</span></div><div class='line' id='LC108'>		<span class="c1">// CALLBACKS. Events triggered by calendar class. You can use</span></div><div class='line' id='LC109'>		<span class="c1">// those to affect you UI</span></div><div class='line' id='LC110'>		<span class="c1">// ------------------------------------------------------------</span></div><div class='line' id='LC111'>		<span class="nx">onAfterEventsLoad</span><span class="o">:</span>  <span class="kd">function</span><span class="p">(</span><span class="nx">events</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC112'>			<span class="c1">// Inside this function &#39;this&#39; is the calendar instance</span></div><div class='line' id='LC113'>		<span class="p">},</span></div><div class='line' id='LC114'>		<span class="nx">onBeforeEventsLoad</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">next</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC115'>			<span class="c1">// Inside this function &#39;this&#39; is the calendar instance</span></div><div class='line' id='LC116'>			<span class="nx">next</span><span class="p">();</span></div><div class='line' id='LC117'>		<span class="p">},</span></div><div class='line' id='LC118'>		<span class="nx">onAfterViewLoad</span><span class="o">:</span>    <span class="kd">function</span><span class="p">(</span><span class="nx">view</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC119'>			<span class="c1">// Inside this function &#39;this&#39; is the calendar instance</span></div><div class='line' id='LC120'>		<span class="p">},</span></div><div class='line' id='LC121'>		<span class="nx">onAfterModalShown</span><span class="o">:</span>  <span class="kd">function</span><span class="p">(</span><span class="nx">events</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC122'>			<span class="c1">// Inside this function &#39;this&#39; is the calendar instance</span></div><div class='line' id='LC123'>		<span class="p">},</span></div><div class='line' id='LC124'>		<span class="nx">onAfterModalHidden</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">events</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC125'>			<span class="c1">// Inside this function &#39;this&#39; is the calendar instance</span></div><div class='line' id='LC126'>		<span class="p">},</span></div><div class='line' id='LC127'>		<span class="c1">// -------------------------------------------------------------</span></div><div class='line' id='LC128'>		<span class="c1">// INTERNAL USE ONLY. DO NOT ASSIGN IT WILL BE OVERRIDDEN ANYWAY</span></div><div class='line' id='LC129'>		<span class="c1">// -------------------------------------------------------------</span></div><div class='line' id='LC130'>		<span class="nx">events</span><span class="o">:</span>             <span class="p">[],</span></div><div class='line' id='LC131'>		<span class="nx">templates</span><span class="o">:</span>          <span class="p">{</span></div><div class='line' id='LC132'>			<span class="nx">year</span><span class="o">:</span>  <span class="s1">&#39;&#39;</span><span class="p">,</span></div><div class='line' id='LC133'>			<span class="nx">month</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">,</span></div><div class='line' id='LC134'>			<span class="nx">week</span><span class="o">:</span>  <span class="s1">&#39;&#39;</span><span class="p">,</span></div><div class='line' id='LC135'>			<span class="nx">day</span><span class="o">:</span>   <span class="s1">&#39;&#39;</span></div><div class='line' id='LC136'>		<span class="p">},</span></div><div class='line' id='LC137'>		<span class="nx">stop_cycling</span><span class="o">:</span>       <span class="kc">false</span></div><div class='line' id='LC138'>	<span class="p">};</span></div><div class='line' id='LC139'><br/></div><div class='line' id='LC140'>	<span class="kd">var</span> <span class="nx">defaults_extended</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC141'>		<span class="nx">first_day</span><span class="o">:</span> <span class="mi">2</span><span class="p">,</span></div><div class='line' id='LC142'>		<span class="nx">holidays</span><span class="o">:</span>  <span class="p">{</span></div><div class='line' id='LC143'>			<span class="c1">// January 1</span></div><div class='line' id='LC144'>			<span class="s1">&#39;01-01&#39;</span><span class="o">:</span>  <span class="s2">&quot;New Year&#39;s Day&quot;</span><span class="p">,</span></div><div class='line' id='LC145'>			<span class="c1">// Third (+3*) Monday (1) in January (01)</span></div><div class='line' id='LC146'>			<span class="s1">&#39;01+3*1&#39;</span><span class="o">:</span> <span class="s2">&quot;Birthday of Dr. Martin Luther King, Jr.&quot;</span><span class="p">,</span></div><div class='line' id='LC147'>			<span class="c1">// Third (+3*) Monday (1) in February (02)</span></div><div class='line' id='LC148'>			<span class="s1">&#39;02+3*1&#39;</span><span class="o">:</span> <span class="s2">&quot;Washington&#39;s Birthday&quot;</span><span class="p">,</span></div><div class='line' id='LC149'>			<span class="c1">// Last (-1*) Monday (1) in May (05)</span></div><div class='line' id='LC150'>			<span class="s1">&#39;05-1*1&#39;</span><span class="o">:</span> <span class="s2">&quot;Memorial Day&quot;</span><span class="p">,</span></div><div class='line' id='LC151'>			<span class="c1">// July 4</span></div><div class='line' id='LC152'>			<span class="s1">&#39;04-07&#39;</span><span class="o">:</span>  <span class="s2">&quot;Independence Day&quot;</span><span class="p">,</span></div><div class='line' id='LC153'>			<span class="c1">// First (+1*) Monday (1) in September (09)</span></div><div class='line' id='LC154'>			<span class="s1">&#39;09+1*1&#39;</span><span class="o">:</span> <span class="s2">&quot;Labor Day&quot;</span><span class="p">,</span></div><div class='line' id='LC155'>			<span class="c1">// Second (+2*) Monday (1) in October (10)</span></div><div class='line' id='LC156'>			<span class="s1">&#39;10+2*1&#39;</span><span class="o">:</span> <span class="s2">&quot;Columbus Day&quot;</span><span class="p">,</span></div><div class='line' id='LC157'>			<span class="c1">// November 11</span></div><div class='line' id='LC158'>			<span class="s1">&#39;11-11&#39;</span><span class="o">:</span>  <span class="s2">&quot;Veterans Day&quot;</span><span class="p">,</span></div><div class='line' id='LC159'>			<span class="c1">// Fourth (+4*) Thursday (4) in November (11)</span></div><div class='line' id='LC160'>			<span class="s1">&#39;11+4*4&#39;</span><span class="o">:</span> <span class="s2">&quot;Thanksgiving Day&quot;</span><span class="p">,</span></div><div class='line' id='LC161'>			<span class="c1">// December 25</span></div><div class='line' id='LC162'>			<span class="s1">&#39;25-12&#39;</span><span class="o">:</span>  <span class="s2">&quot;Christmas&quot;</span></div><div class='line' id='LC163'>		<span class="p">}</span></div><div class='line' id='LC164'>	<span class="p">};</span></div><div class='line' id='LC165'><br/></div><div class='line' id='LC166'>	<span class="kd">var</span> <span class="nx">strings</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC167'>		<span class="nx">error_noview</span><span class="o">:</span>     <span class="s1">&#39;Calendar: View {0} not found&#39;</span><span class="p">,</span></div><div class='line' id='LC168'>		<span class="nx">error_dateformat</span><span class="o">:</span> <span class="s1">&#39;Calendar: Wrong date format {0}. Should be either &quot;now&quot; or &quot;yyyy-mm-dd&quot;&#39;</span><span class="p">,</span></div><div class='line' id='LC169'>		<span class="nx">error_loadurl</span><span class="o">:</span>    <span class="s1">&#39;Calendar: Event URL is not set&#39;</span><span class="p">,</span></div><div class='line' id='LC170'>		<span class="nx">error_where</span><span class="o">:</span>      <span class="s1">&#39;Calendar: Wrong navigation direction {0}. Can be only &quot;next&quot; or &quot;prev&quot; or &quot;today&quot;&#39;</span><span class="p">,</span></div><div class='line' id='LC171'>		<span class="nx">error_timedevide</span><span class="o">:</span> <span class="s1">&#39;Calendar: Time split parameter should divide 60 without decimals. Something like 10, 15, 30&#39;</span><span class="p">,</span></div><div class='line' id='LC172'><br/></div><div class='line' id='LC173'>		<span class="nx">no_events_in_day</span><span class="o">:</span> <span class="s1">&#39;No events in this day.&#39;</span><span class="p">,</span></div><div class='line' id='LC174'><br/></div><div class='line' id='LC175'>		<span class="nx">title_year</span><span class="o">:</span>  <span class="s1">&#39;{0}&#39;</span><span class="p">,</span></div><div class='line' id='LC176'>		<span class="nx">title_month</span><span class="o">:</span> <span class="s1">&#39;{0} {1}&#39;</span><span class="p">,</span></div><div class='line' id='LC177'>		<span class="nx">title_week</span><span class="o">:</span>  <span class="s1">&#39;week {0} of {1}&#39;</span><span class="p">,</span></div><div class='line' id='LC178'>		<span class="nx">title_day</span><span class="o">:</span>   <span class="s1">&#39;{0} {1} {2}, {3}&#39;</span><span class="p">,</span></div><div class='line' id='LC179'><br/></div><div class='line' id='LC180'>		<span class="nx">week</span><span class="o">:</span>        <span class="s1">&#39;Week {0}&#39;</span><span class="p">,</span></div><div class='line' id='LC181'>		<span class="nx">all_day</span><span class="o">:</span>     <span class="s1">&#39;All day&#39;</span><span class="p">,</span></div><div class='line' id='LC182'>		<span class="nx">time</span><span class="o">:</span>        <span class="s1">&#39;Time&#39;</span><span class="p">,</span></div><div class='line' id='LC183'>		<span class="nx">events</span><span class="o">:</span>      <span class="s1">&#39;Events&#39;</span><span class="p">,</span></div><div class='line' id='LC184'>		<span class="nx">before_time</span><span class="o">:</span> <span class="s1">&#39;Ends before timeline&#39;</span><span class="p">,</span></div><div class='line' id='LC185'>		<span class="nx">after_time</span><span class="o">:</span>  <span class="s1">&#39;Starts after timeline&#39;</span><span class="p">,</span></div><div class='line' id='LC186'><br/></div><div class='line' id='LC187'><br/></div><div class='line' id='LC188'>		<span class="nx">m0</span><span class="o">:</span>  <span class="s1">&#39;January&#39;</span><span class="p">,</span></div><div class='line' id='LC189'>		<span class="nx">m1</span><span class="o">:</span>  <span class="s1">&#39;February&#39;</span><span class="p">,</span></div><div class='line' id='LC190'>		<span class="nx">m2</span><span class="o">:</span>  <span class="s1">&#39;March&#39;</span><span class="p">,</span></div><div class='line' id='LC191'>		<span class="nx">m3</span><span class="o">:</span>  <span class="s1">&#39;April&#39;</span><span class="p">,</span></div><div class='line' id='LC192'>		<span class="nx">m4</span><span class="o">:</span>  <span class="s1">&#39;May&#39;</span><span class="p">,</span></div><div class='line' id='LC193'>		<span class="nx">m5</span><span class="o">:</span>  <span class="s1">&#39;June&#39;</span><span class="p">,</span></div><div class='line' id='LC194'>		<span class="nx">m6</span><span class="o">:</span>  <span class="s1">&#39;July&#39;</span><span class="p">,</span></div><div class='line' id='LC195'>		<span class="nx">m7</span><span class="o">:</span>  <span class="s1">&#39;August&#39;</span><span class="p">,</span></div><div class='line' id='LC196'>		<span class="nx">m8</span><span class="o">:</span>  <span class="s1">&#39;September&#39;</span><span class="p">,</span></div><div class='line' id='LC197'>		<span class="nx">m9</span><span class="o">:</span>  <span class="s1">&#39;October&#39;</span><span class="p">,</span></div><div class='line' id='LC198'>		<span class="nx">m10</span><span class="o">:</span> <span class="s1">&#39;November&#39;</span><span class="p">,</span></div><div class='line' id='LC199'>		<span class="nx">m11</span><span class="o">:</span> <span class="s1">&#39;December&#39;</span><span class="p">,</span></div><div class='line' id='LC200'><br/></div><div class='line' id='LC201'>		<span class="nx">ms0</span><span class="o">:</span>  <span class="s1">&#39;Jan&#39;</span><span class="p">,</span></div><div class='line' id='LC202'>		<span class="nx">ms1</span><span class="o">:</span>  <span class="s1">&#39;Feb&#39;</span><span class="p">,</span></div><div class='line' id='LC203'>		<span class="nx">ms2</span><span class="o">:</span>  <span class="s1">&#39;Mar&#39;</span><span class="p">,</span></div><div class='line' id='LC204'>		<span class="nx">ms3</span><span class="o">:</span>  <span class="s1">&#39;Apr&#39;</span><span class="p">,</span></div><div class='line' id='LC205'>		<span class="nx">ms4</span><span class="o">:</span>  <span class="s1">&#39;May&#39;</span><span class="p">,</span></div><div class='line' id='LC206'>		<span class="nx">ms5</span><span class="o">:</span>  <span class="s1">&#39;Jun&#39;</span><span class="p">,</span></div><div class='line' id='LC207'>		<span class="nx">ms6</span><span class="o">:</span>  <span class="s1">&#39;Jul&#39;</span><span class="p">,</span></div><div class='line' id='LC208'>		<span class="nx">ms7</span><span class="o">:</span>  <span class="s1">&#39;Aug&#39;</span><span class="p">,</span></div><div class='line' id='LC209'>		<span class="nx">ms8</span><span class="o">:</span>  <span class="s1">&#39;Sep&#39;</span><span class="p">,</span></div><div class='line' id='LC210'>		<span class="nx">ms9</span><span class="o">:</span>  <span class="s1">&#39;Oct&#39;</span><span class="p">,</span></div><div class='line' id='LC211'>		<span class="nx">ms10</span><span class="o">:</span> <span class="s1">&#39;Nov&#39;</span><span class="p">,</span></div><div class='line' id='LC212'>		<span class="nx">ms11</span><span class="o">:</span> <span class="s1">&#39;Dec&#39;</span><span class="p">,</span></div><div class='line' id='LC213'><br/></div><div class='line' id='LC214'>		<span class="nx">d0</span><span class="o">:</span> <span class="s1">&#39;Sunday&#39;</span><span class="p">,</span></div><div class='line' id='LC215'>		<span class="nx">d1</span><span class="o">:</span> <span class="s1">&#39;Monday&#39;</span><span class="p">,</span></div><div class='line' id='LC216'>		<span class="nx">d2</span><span class="o">:</span> <span class="s1">&#39;Tuesday&#39;</span><span class="p">,</span></div><div class='line' id='LC217'>		<span class="nx">d3</span><span class="o">:</span> <span class="s1">&#39;Wednesday&#39;</span><span class="p">,</span></div><div class='line' id='LC218'>		<span class="nx">d4</span><span class="o">:</span> <span class="s1">&#39;Thursday&#39;</span><span class="p">,</span></div><div class='line' id='LC219'>		<span class="nx">d5</span><span class="o">:</span> <span class="s1">&#39;Friday&#39;</span><span class="p">,</span></div><div class='line' id='LC220'>		<span class="nx">d6</span><span class="o">:</span> <span class="s1">&#39;Saturday&#39;</span></div><div class='line' id='LC221'>	<span class="p">};</span></div><div class='line' id='LC222'><br/></div><div class='line' id='LC223'>	<span class="kd">var</span> <span class="nx">browser_timezone</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC224'>	<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC225'>		<span class="k">if</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">type</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">jstz</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;object&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">$</span><span class="p">.</span><span class="nx">type</span><span class="p">(</span><span class="nx">jstz</span><span class="p">.</span><span class="nx">determine</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC226'>			<span class="nx">browser_timezone</span> <span class="o">=</span> <span class="nx">jstz</span><span class="p">.</span><span class="nx">determine</span><span class="p">().</span><span class="nx">name</span><span class="p">();</span></div><div class='line' id='LC227'>			<span class="k">if</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">type</span><span class="p">(</span><span class="nx">browser_timezone</span><span class="p">)</span> <span class="o">!==</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC228'>				<span class="nx">browser_timezone</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC229'>			<span class="p">}</span></div><div class='line' id='LC230'>		<span class="p">}</span></div><div class='line' id='LC231'>	<span class="p">}</span></div><div class='line' id='LC232'>	<span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC233'>	<span class="p">}</span></div><div class='line' id='LC234'><br/></div><div class='line' id='LC235'>	<span class="kd">function</span> <span class="nx">buildEventsUrl</span><span class="p">(</span><span class="nx">events_url</span><span class="p">,</span> <span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC236'>		<span class="kd">var</span> <span class="nx">separator</span><span class="p">,</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">url</span><span class="p">;</span></div><div class='line' id='LC237'>		<span class="nx">url</span> <span class="o">=</span> <span class="nx">events_url</span><span class="p">;</span></div><div class='line' id='LC238'>		<span class="nx">separator</span> <span class="o">=</span> <span class="p">(</span><span class="nx">events_url</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;?&#39;</span><span class="p">)</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;?&#39;</span> <span class="o">:</span> <span class="s1">&#39;&amp;&#39;</span><span class="p">;</span></div><div class='line' id='LC239'>		<span class="k">for</span><span class="p">(</span><span class="nx">key</span> <span class="k">in</span> <span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC240'>			<span class="nx">url</span> <span class="o">+=</span> <span class="nx">separator</span> <span class="o">+</span> <span class="nx">key</span> <span class="o">+</span> <span class="s1">&#39;=&#39;</span> <span class="o">+</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">data</span><span class="p">[</span><span class="nx">key</span><span class="p">]);</span></div><div class='line' id='LC241'>			<span class="nx">separator</span> <span class="o">=</span> <span class="s1">&#39;&amp;&#39;</span><span class="p">;</span></div><div class='line' id='LC242'>		<span class="p">}</span></div><div class='line' id='LC243'>		<span class="k">return</span> <span class="nx">url</span><span class="p">;</span></div><div class='line' id='LC244'>	<span class="p">}</span></div><div class='line' id='LC245'><br/></div><div class='line' id='LC246'>	<span class="kd">function</span> <span class="nx">getExtentedOption</span><span class="p">(</span><span class="nx">cal</span><span class="p">,</span> <span class="nx">option_name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC247'>		<span class="kd">var</span> <span class="nx">fromOptions</span> <span class="o">=</span> <span class="p">(</span><span class="nx">cal</span><span class="p">.</span><span class="nx">options</span><span class="p">[</span><span class="nx">option_name</span><span class="p">]</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="o">?</span> <span class="nx">cal</span><span class="p">.</span><span class="nx">options</span><span class="p">[</span><span class="nx">option_name</span><span class="p">]</span> <span class="o">:</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC248'>		<span class="kd">var</span> <span class="nx">fromLanguage</span> <span class="o">=</span> <span class="p">(</span><span class="nx">cal</span><span class="p">.</span><span class="nx">locale</span><span class="p">[</span><span class="nx">option_name</span><span class="p">]</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="o">?</span> <span class="nx">cal</span><span class="p">.</span><span class="nx">locale</span><span class="p">[</span><span class="nx">option_name</span><span class="p">]</span> <span class="o">:</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC249'>		<span class="k">if</span><span class="p">((</span><span class="nx">option_name</span> <span class="o">==</span> <span class="s1">&#39;holidays&#39;</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">cal</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">merge_holidays</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC250'>			<span class="kd">var</span> <span class="nx">holidays</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC251'>			<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="kc">true</span><span class="p">,</span> <span class="nx">holidays</span><span class="p">,</span> <span class="nx">fromLanguage</span> <span class="o">?</span> <span class="nx">fromLanguage</span> <span class="o">:</span> <span class="nx">defaults_extended</span><span class="p">.</span><span class="nx">holidays</span><span class="p">);</span></div><div class='line' id='LC252'>			<span class="k">if</span><span class="p">(</span><span class="nx">fromOptions</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC253'>				<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="kc">true</span><span class="p">,</span> <span class="nx">holidays</span><span class="p">,</span> <span class="nx">fromOptions</span><span class="p">);</span></div><div class='line' id='LC254'>			<span class="p">}</span></div><div class='line' id='LC255'>			<span class="k">return</span> <span class="nx">holidays</span><span class="p">;</span></div><div class='line' id='LC256'>		<span class="p">}</span></div><div class='line' id='LC257'>		<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC258'>			<span class="k">if</span><span class="p">(</span><span class="nx">fromOptions</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC259'>				<span class="k">return</span> <span class="nx">fromOptions</span><span class="p">;</span></div><div class='line' id='LC260'>			<span class="p">}</span></div><div class='line' id='LC261'>			<span class="k">if</span><span class="p">(</span><span class="nx">fromLanguage</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC262'>				<span class="k">return</span> <span class="nx">fromLanguage</span><span class="p">;</span></div><div class='line' id='LC263'>			<span class="p">}</span></div><div class='line' id='LC264'>			<span class="k">return</span> <span class="nx">defaults_extended</span><span class="p">[</span><span class="nx">option_name</span><span class="p">];</span></div><div class='line' id='LC265'>		<span class="p">}</span></div><div class='line' id='LC266'>	<span class="p">}</span></div><div class='line' id='LC267'><br/></div><div class='line' id='LC268'>	<span class="kd">function</span> <span class="nx">getHolidays</span><span class="p">(</span><span class="nx">cal</span><span class="p">,</span> <span class="nx">year</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC269'>		<span class="kd">var</span> <span class="nx">hash</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC270'>		<span class="kd">var</span> <span class="nx">holidays_def</span> <span class="o">=</span> <span class="nx">getExtentedOption</span><span class="p">(</span><span class="nx">cal</span><span class="p">,</span> <span class="s1">&#39;holidays&#39;</span><span class="p">);</span></div><div class='line' id='LC271'>		<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">k</span> <span class="k">in</span> <span class="nx">holidays_def</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC272'>			<span class="nx">hash</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">k</span> <span class="o">+</span> <span class="s1">&#39;:&#39;</span> <span class="o">+</span> <span class="nx">holidays_def</span><span class="p">[</span><span class="nx">k</span><span class="p">]);</span></div><div class='line' id='LC273'>		<span class="p">}</span></div><div class='line' id='LC274'>		<span class="nx">hash</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">year</span><span class="p">);</span></div><div class='line' id='LC275'>		<span class="nx">hash</span> <span class="o">=</span> <span class="nx">hash</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;|&#39;</span><span class="p">);</span></div><div class='line' id='LC276'>		<span class="k">if</span><span class="p">(</span><span class="nx">hash</span> <span class="k">in</span> <span class="nx">getHolidays</span><span class="p">.</span><span class="nx">cache</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC277'>			<span class="k">return</span> <span class="nx">getHolidays</span><span class="p">.</span><span class="nx">cache</span><span class="p">[</span><span class="nx">hash</span><span class="p">];</span></div><div class='line' id='LC278'>		<span class="p">}</span></div><div class='line' id='LC279'>		<span class="kd">var</span> <span class="nx">holidays</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC280'>		<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">holidays_def</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC281'>			<span class="kd">var</span> <span class="nx">firstDay</span> <span class="o">=</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">lastDay</span> <span class="o">=</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">failed</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC282'>			<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">key</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;&gt;&#39;</span><span class="p">),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">chunk</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC283'>				<span class="kd">var</span> <span class="nx">m</span><span class="p">,</span> <span class="nx">date</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC284'>				<span class="k">if</span><span class="p">(</span><span class="nx">m</span> <span class="o">=</span> <span class="sr">/^(\d\d)-(\d\d)$/</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">chunk</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC285'>					<span class="nx">date</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">year</span><span class="p">,</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">m</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span> <span class="mi">10</span><span class="p">)</span> <span class="o">-</span> <span class="mi">1</span><span class="p">,</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">m</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span> <span class="mi">10</span><span class="p">));</span></div><div class='line' id='LC286'>				<span class="p">}</span></div><div class='line' id='LC287'>				<span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">m</span> <span class="o">=</span> <span class="sr">/^(\d\d)-(\d\d)-(\d\d\d\d)$/</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">chunk</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC288'>					<span class="k">if</span><span class="p">(</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">m</span><span class="p">[</span><span class="mi">3</span><span class="p">],</span> <span class="mi">10</span><span class="p">)</span> <span class="o">==</span> <span class="nx">year</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC289'>						<span class="nx">date</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">year</span><span class="p">,</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">m</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span> <span class="mi">10</span><span class="p">)</span> <span class="o">-</span> <span class="mi">1</span><span class="p">,</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">m</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span> <span class="mi">10</span><span class="p">));</span></div><div class='line' id='LC290'>					<span class="p">}</span></div><div class='line' id='LC291'>				<span class="p">}</span></div><div class='line' id='LC292'>				<span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">m</span> <span class="o">=</span> <span class="sr">/^easter(([+\-])(\d+))?$/</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">chunk</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC293'>					<span class="nx">date</span> <span class="o">=</span> <span class="nx">getEasterDate</span><span class="p">(</span><span class="nx">year</span><span class="p">,</span> <span class="nx">m</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">?</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">m</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span> <span class="mi">10</span><span class="p">)</span> <span class="o">:</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC294'>				<span class="p">}</span></div><div class='line' id='LC295'>				<span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">m</span> <span class="o">=</span> <span class="sr">/^(\d\d)([+\-])([1-5])\*([0-6])$/</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">chunk</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC296'>					<span class="kd">var</span> <span class="nx">month</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">m</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span> <span class="mi">10</span><span class="p">)</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC297'>					<span class="kd">var</span> <span class="nx">direction</span> <span class="o">=</span> <span class="nx">m</span><span class="p">[</span><span class="mi">2</span><span class="p">];</span></div><div class='line' id='LC298'>					<span class="kd">var</span> <span class="nx">offset</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">m</span><span class="p">[</span><span class="mi">3</span><span class="p">]);</span></div><div class='line' id='LC299'>					<span class="kd">var</span> <span class="nx">weekday</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">m</span><span class="p">[</span><span class="mi">4</span><span class="p">]);</span></div><div class='line' id='LC300'>					<span class="k">switch</span><span class="p">(</span><span class="nx">direction</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC301'>						<span class="k">case</span> <span class="s1">&#39;+&#39;</span><span class="o">:</span></div><div class='line' id='LC302'>							<span class="kd">var</span> <span class="nx">d</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">year</span><span class="p">,</span> <span class="nx">month</span><span class="p">,</span> <span class="mi">1</span> <span class="o">-</span> <span class="mi">7</span><span class="p">);</span></div><div class='line' id='LC303'>							<span class="k">while</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">getDay</span><span class="p">()</span> <span class="o">!=</span> <span class="nx">weekday</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC304'>								<span class="nx">d</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">getFullYear</span><span class="p">(),</span> <span class="nx">d</span><span class="p">.</span><span class="nx">getMonth</span><span class="p">(),</span> <span class="nx">d</span><span class="p">.</span><span class="nx">getDate</span><span class="p">()</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC305'>							<span class="p">}</span></div><div class='line' id='LC306'>							<span class="nx">date</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">getFullYear</span><span class="p">(),</span> <span class="nx">d</span><span class="p">.</span><span class="nx">getMonth</span><span class="p">(),</span> <span class="nx">d</span><span class="p">.</span><span class="nx">getDate</span><span class="p">()</span> <span class="o">+</span> <span class="mi">7</span> <span class="o">*</span> <span class="nx">offset</span><span class="p">);</span></div><div class='line' id='LC307'>							<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC308'>						<span class="k">case</span> <span class="s1">&#39;-&#39;</span><span class="o">:</span></div><div class='line' id='LC309'>							<span class="kd">var</span> <span class="nx">d</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">year</span><span class="p">,</span> <span class="nx">month</span> <span class="o">+</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span> <span class="o">+</span> <span class="mi">7</span><span class="p">);</span></div><div class='line' id='LC310'>							<span class="k">while</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">getDay</span><span class="p">()</span> <span class="o">!=</span> <span class="nx">weekday</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC311'>								<span class="nx">d</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">getFullYear</span><span class="p">(),</span> <span class="nx">d</span><span class="p">.</span><span class="nx">getMonth</span><span class="p">(),</span> <span class="nx">d</span><span class="p">.</span><span class="nx">getDate</span><span class="p">()</span> <span class="o">-</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC312'>							<span class="p">}</span></div><div class='line' id='LC313'>							<span class="nx">date</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">getFullYear</span><span class="p">(),</span> <span class="nx">d</span><span class="p">.</span><span class="nx">getMonth</span><span class="p">(),</span> <span class="nx">d</span><span class="p">.</span><span class="nx">getDate</span><span class="p">()</span> <span class="o">-</span> <span class="mi">7</span> <span class="o">*</span> <span class="nx">offset</span><span class="p">);</span></div><div class='line' id='LC314'>							<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC315'>					<span class="p">}</span></div><div class='line' id='LC316'>				<span class="p">}</span></div><div class='line' id='LC317'>				<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">date</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC318'>					<span class="nx">warn</span><span class="p">(</span><span class="s1">&#39;Unknown holiday: &#39;</span> <span class="o">+</span> <span class="nx">key</span><span class="p">);</span></div><div class='line' id='LC319'>					<span class="nx">failed</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC320'>					<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC321'>				<span class="p">}</span></div><div class='line' id='LC322'>				<span class="k">switch</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC323'>					<span class="k">case</span> <span class="mi">0</span><span class="o">:</span></div><div class='line' id='LC324'>						<span class="nx">firstDay</span> <span class="o">=</span> <span class="nx">date</span><span class="p">;</span></div><div class='line' id='LC325'>						<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC326'>					<span class="k">case</span> <span class="mi">1</span><span class="o">:</span></div><div class='line' id='LC327'>						<span class="k">if</span><span class="p">(</span><span class="nx">date</span><span class="p">.</span><span class="nx">getTime</span><span class="p">()</span> <span class="o">&lt;=</span> <span class="nx">firstDay</span><span class="p">.</span><span class="nx">getTime</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC328'>							<span class="nx">warn</span><span class="p">(</span><span class="s1">&#39;Unknown holiday: &#39;</span> <span class="o">+</span> <span class="nx">key</span><span class="p">);</span></div><div class='line' id='LC329'>							<span class="nx">failed</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC330'>							<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC331'>						<span class="p">}</span></div><div class='line' id='LC332'>						<span class="nx">lastDay</span> <span class="o">=</span> <span class="nx">date</span><span class="p">;</span></div><div class='line' id='LC333'>						<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC334'>					<span class="k">default</span><span class="o">:</span></div><div class='line' id='LC335'>						<span class="nx">warn</span><span class="p">(</span><span class="s1">&#39;Unknown holiday: &#39;</span> <span class="o">+</span> <span class="nx">key</span><span class="p">);</span></div><div class='line' id='LC336'>						<span class="nx">failed</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC337'>						<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC338'>				<span class="p">}</span></div><div class='line' id='LC339'>			<span class="p">});</span></div><div class='line' id='LC340'>			<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">failed</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC341'>				<span class="kd">var</span> <span class="nx">days</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC342'>				<span class="k">if</span><span class="p">(</span><span class="nx">lastDay</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC343'>					<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">date</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">firstDay</span><span class="p">.</span><span class="nx">getTime</span><span class="p">());</span> <span class="nx">date</span><span class="p">.</span><span class="nx">getTime</span><span class="p">()</span> <span class="o">&lt;=</span> <span class="nx">lastDay</span><span class="p">.</span><span class="nx">getTime</span><span class="p">();</span> <span class="nx">date</span><span class="p">.</span><span class="nx">setDate</span><span class="p">(</span><span class="nx">date</span><span class="p">.</span><span class="nx">getDate</span><span class="p">()</span> <span class="o">+</span> <span class="mi">1</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC344'>						<span class="nx">days</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">date</span><span class="p">.</span><span class="nx">getTime</span><span class="p">()));</span></div><div class='line' id='LC345'>					<span class="p">}</span></div><div class='line' id='LC346'>				<span class="p">}</span></div><div class='line' id='LC347'>				<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC348'>					<span class="nx">days</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">firstDay</span><span class="p">);</span></div><div class='line' id='LC349'>				<span class="p">}</span></div><div class='line' id='LC350'>				<span class="nx">holidays</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span><span class="nx">name</span><span class="o">:</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">days</span><span class="o">:</span> <span class="nx">days</span><span class="p">});</span></div><div class='line' id='LC351'>			<span class="p">}</span></div><div class='line' id='LC352'>		<span class="p">});</span></div><div class='line' id='LC353'>		<span class="nx">getHolidays</span><span class="p">.</span><span class="nx">cache</span><span class="p">[</span><span class="nx">hash</span><span class="p">]</span> <span class="o">=</span> <span class="nx">holidays</span><span class="p">;</span></div><div class='line' id='LC354'>		<span class="k">return</span> <span class="nx">getHolidays</span><span class="p">.</span><span class="nx">cache</span><span class="p">[</span><span class="nx">hash</span><span class="p">];</span></div><div class='line' id='LC355'>	<span class="p">}</span></div><div class='line' id='LC356'><br/></div><div class='line' id='LC357'>	<span class="nx">getHolidays</span><span class="p">.</span><span class="nx">cache</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC358'><br/></div><div class='line' id='LC359'>	<span class="kd">function</span> <span class="nx">warn</span><span class="p">(</span><span class="nx">message</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC360'>		<span class="k">if</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">type</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">console</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;object&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">$</span><span class="p">.</span><span class="nx">type</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">console</span><span class="p">.</span><span class="nx">warn</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC361'>			<span class="nb">window</span><span class="p">.</span><span class="nx">console</span><span class="p">.</span><span class="nx">warn</span><span class="p">(</span><span class="s1">&#39;[Bootstrap-Calendar] &#39;</span> <span class="o">+</span> <span class="nx">message</span><span class="p">);</span></div><div class='line' id='LC362'>		<span class="p">}</span></div><div class='line' id='LC363'>	<span class="p">}</span></div><div class='line' id='LC364'><br/></div><div class='line' id='LC365'>	<span class="kd">function</span> <span class="nx">Calendar</span><span class="p">(</span><span class="nx">params</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC366'>		<span class="k">this</span><span class="p">.</span><span class="nx">options</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="kc">true</span><span class="p">,</span> <span class="p">{</span><span class="nx">position</span><span class="o">:</span> <span class="p">{</span><span class="nx">start</span><span class="o">:</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(),</span> <span class="nx">end</span><span class="o">:</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">()}},</span> <span class="nx">defaults</span><span class="p">,</span> <span class="nx">params</span><span class="p">);</span></div><div class='line' id='LC367'>		<span class="k">this</span><span class="p">.</span><span class="nx">setLanguage</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">language</span><span class="p">);</span></div><div class='line' id='LC368'>		<span class="k">this</span><span class="p">.</span><span class="nx">context</span> <span class="o">=</span> <span class="nx">context</span><span class="p">;</span></div><div class='line' id='LC369'><br/></div><div class='line' id='LC370'>		<span class="nx">context</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;width&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">width</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;cal-context&#39;</span><span class="p">);</span></div><div class='line' id='LC371'><br/></div><div class='line' id='LC372'>		<span class="k">this</span><span class="p">.</span><span class="nx">view</span><span class="p">();</span></div><div class='line' id='LC373'>		<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC374'>	<span class="p">}</span></div><div class='line' id='LC375'><br/></div><div class='line' id='LC376'>	<span class="nx">Calendar</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">setOptions</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">object</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC377'>		<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">,</span> <span class="nx">object</span><span class="p">);</span></div><div class='line' id='LC378'>		<span class="k">if</span><span class="p">(</span><span class="s1">&#39;language&#39;</span> <span class="k">in</span> <span class="nx">object</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC379'>			<span class="k">this</span><span class="p">.</span><span class="nx">setLanguage</span><span class="p">(</span><span class="nx">object</span><span class="p">.</span><span class="nx">language</span><span class="p">);</span></div><div class='line' id='LC380'>		<span class="p">}</span></div><div class='line' id='LC381'>		<span class="k">if</span><span class="p">(</span><span class="s1">&#39;modal&#39;</span> <span class="k">in</span> <span class="nx">object</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC382'>			<span class="k">this</span><span class="p">.</span><span class="nx">_update_modal</span><span class="p">();</span></div><div class='line' id='LC383'>		<span class="p">}</span></div><div class='line' id='LC384'>	<span class="p">}</span></div><div class='line' id='LC385'><br/></div><div class='line' id='LC386'>	<span class="nx">Calendar</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">setLanguage</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">lang</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC387'>		<span class="k">if</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">calendar_languages</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">lang</span> <span class="k">in</span> <span class="nb">window</span><span class="p">.</span><span class="nx">calendar_languages</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC388'>			<span class="k">this</span><span class="p">.</span><span class="nx">locale</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="kc">true</span><span class="p">,</span> <span class="p">{},</span> <span class="nx">strings</span><span class="p">,</span> <span class="nx">calendar_languages</span><span class="p">[</span><span class="nx">lang</span><span class="p">]);</span></div><div class='line' id='LC389'>			<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">language</span> <span class="o">=</span> <span class="nx">lang</span><span class="p">;</span></div><div class='line' id='LC390'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC391'>			<span class="k">this</span><span class="p">.</span><span class="nx">locale</span> <span class="o">=</span> <span class="nx">strings</span><span class="p">;</span></div><div class='line' id='LC392'>			<span class="k">delete</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">language</span><span class="p">;</span></div><div class='line' id='LC393'>		<span class="p">}</span></div><div class='line' id='LC394'>	<span class="p">}</span></div><div class='line' id='LC395'><br/></div><div class='line' id='LC396'>	<span class="nx">Calendar</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_render</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC397'>		<span class="k">this</span><span class="p">.</span><span class="nx">context</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC398'>		<span class="k">this</span><span class="p">.</span><span class="nx">_loadTemplate</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">view</span><span class="p">);</span></div><div class='line' id='LC399'>		<span class="k">this</span><span class="p">.</span><span class="nx">stop_cycling</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC400'><br/></div><div class='line' id='LC401'>		<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC402'>		<span class="nx">data</span><span class="p">.</span><span class="nx">cal</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC403'>		<span class="nx">data</span><span class="p">.</span><span class="nx">day</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC404'><br/></div><div class='line' id='LC405'>		<span class="c1">// Getting list of days in a week in correct order. Works for month and week views</span></div><div class='line' id='LC406'>		<span class="k">if</span><span class="p">(</span><span class="nx">getExtentedOption</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;first_day&#39;</span><span class="p">)</span> <span class="o">==</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC407'>			<span class="nx">data</span><span class="p">.</span><span class="nx">months</span> <span class="o">=</span> <span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">locale</span><span class="p">.</span><span class="nx">d1</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">locale</span><span class="p">.</span><span class="nx">d2</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">locale</span><span class="p">.</span><span class="nx">d3</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">locale</span><span class="p">.</span><span class="nx">d4</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">locale</span><span class="p">.</span><span class="nx">d5</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">locale</span><span class="p">.</span><span class="nx">d6</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">locale</span><span class="p">.</span><span class="nx">d0</span><span class="p">]</span></div><div class='line' id='LC408'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC409'>			<span class="nx">data</span><span class="p">.</span><span class="nx">months</span> <span class="o">=</span> <span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">locale</span><span class="p">.</span><span class="nx">d0</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">locale</span><span class="p">.</span><span class="nx">d1</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">locale</span><span class="p">.</span><span class="nx">d2</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">locale</span><span class="p">.</span><span class="nx">d3</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">locale</span><span class="p">.</span><span class="nx">d4</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">locale</span><span class="p">.</span><span class="nx">d5</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">locale</span><span class="p">.</span><span class="nx">d6</span><span class="p">]</span></div><div class='line' id='LC410'>		<span class="p">}</span></div><div class='line' id='LC411'><br/></div><div class='line' id='LC412'>		<span class="c1">// Get all events between start and end</span></div><div class='line' id='LC413'>		<span class="kd">var</span> <span class="nx">start</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">getTime</span><span class="p">());</span></div><div class='line' id='LC414'>		<span class="kd">var</span> <span class="nx">end</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">end</span><span class="p">.</span><span class="nx">getTime</span><span class="p">());</span></div><div class='line' id='LC415'><br/></div><div class='line' id='LC416'>		<span class="nx">data</span><span class="p">.</span><span class="nx">events</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getEventsBetween</span><span class="p">(</span><span class="nx">start</span><span class="p">,</span> <span class="nx">end</span><span class="p">);</span></div><div class='line' id='LC417'><br/></div><div class='line' id='LC418'>		<span class="k">switch</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">view</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC419'>			<span class="k">case</span> <span class="s1">&#39;month&#39;</span><span class="o">:</span></div><div class='line' id='LC420'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC421'>			<span class="k">case</span> <span class="s1">&#39;week&#39;</span><span class="o">:</span></div><div class='line' id='LC422'>				<span class="k">this</span><span class="p">.</span><span class="nx">_calculate_hour_minutes</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC423'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC424'>			<span class="k">case</span> <span class="s1">&#39;day&#39;</span><span class="o">:</span></div><div class='line' id='LC425'>				<span class="k">this</span><span class="p">.</span><span class="nx">_calculate_hour_minutes</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC426'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC427'>		<span class="p">}</span></div><div class='line' id='LC428'><br/></div><div class='line' id='LC429'>		<span class="nx">data</span><span class="p">.</span><span class="nx">start</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">getTime</span><span class="p">());</span></div><div class='line' id='LC430'>		<span class="nx">data</span><span class="p">.</span><span class="nx">lang</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">locale</span><span class="p">;</span></div><div class='line' id='LC431'><br/></div><div class='line' id='LC432'>		<span class="k">this</span><span class="p">.</span><span class="nx">context</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">templates</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">view</span><span class="p">](</span><span class="nx">data</span><span class="p">));</span></div><div class='line' id='LC433'>		<span class="k">this</span><span class="p">.</span><span class="nx">_update</span><span class="p">();</span></div><div class='line' id='LC434'>	<span class="p">};</span></div><div class='line' id='LC435'><br/></div><div class='line' id='LC436'>	<span class="nx">Calendar</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_calculate_hour_minutes</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC437'>		<span class="kd">var</span> <span class="nx">$self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC438'>		<span class="kd">var</span> <span class="nx">time_split</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">time_split</span><span class="p">);</span></div><div class='line' id='LC439'>		<span class="nx">data</span><span class="p">.</span><span class="nx">in_hour</span> <span class="o">=</span> <span class="mi">60</span> <span class="o">/</span> <span class="nx">time_split</span><span class="p">;</span></div><div class='line' id='LC440'>		<span class="nx">data</span><span class="p">.</span><span class="nx">hour_split</span> <span class="o">=</span> <span class="nx">time_split</span><span class="p">;</span></div><div class='line' id='LC441'><br/></div><div class='line' id='LC442'>		<span class="k">if</span><span class="p">(((</span><span class="nx">data</span><span class="p">.</span><span class="nx">in_hour</span> <span class="o">&gt;=</span> <span class="mi">1</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">in_hour</span> <span class="o">%</span> <span class="mi">1</span> <span class="o">!=</span> <span class="mi">0</span><span class="p">))</span> <span class="o">||</span> <span class="p">((</span><span class="nx">data</span><span class="p">.</span><span class="nx">in_hour</span> <span class="o">&lt;</span> <span class="mi">1</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="mi">1440</span> <span class="o">/</span> <span class="nx">data</span><span class="p">.</span><span class="nx">hour_split</span> <span class="o">%</span> <span class="mi">1</span> <span class="o">!=</span> <span class="mi">0</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC443'>			<span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">locale</span><span class="p">.</span><span class="nx">error_timedevide</span><span class="p">);</span></div><div class='line' id='LC444'>		<span class="p">}</span></div><div class='line' id='LC445'><br/></div><div class='line' id='LC446'>		<span class="kd">var</span> <span class="nx">time_start</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">time_start</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;:&quot;</span><span class="p">);</span></div><div class='line' id='LC447'>		<span class="kd">var</span> <span class="nx">time_end</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">time_end</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;:&quot;</span><span class="p">);</span></div><div class='line' id='LC448'><br/></div><div class='line' id='LC449'>		<span class="nx">data</span><span class="p">.</span><span class="nx">hours</span> <span class="o">=</span> <span class="p">(</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">time_end</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="o">-</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">time_start</span><span class="p">[</span><span class="mi">0</span><span class="p">]))</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">in_hour</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC450'>		<span class="kd">var</span> <span class="nx">lines</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">hours</span> <span class="o">*</span> <span class="nx">data</span><span class="p">.</span><span class="nx">in_hour</span><span class="p">;</span></div><div class='line' id='LC451'>		<span class="kd">var</span> <span class="nx">ms_per_line</span> <span class="o">=</span> <span class="p">(</span><span class="mi">60000</span> <span class="o">*</span> <span class="nx">time_split</span><span class="p">);</span></div><div class='line' id='LC452'><br/></div><div class='line' id='LC453'>		<span class="kd">var</span> <span class="nx">start</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">getTime</span><span class="p">());</span></div><div class='line' id='LC454'>		<span class="nx">start</span><span class="p">.</span><span class="nx">setHours</span><span class="p">(</span><span class="nx">time_start</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span></div><div class='line' id='LC455'>		<span class="nx">start</span><span class="p">.</span><span class="nx">setMinutes</span><span class="p">(</span><span class="nx">time_start</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC456'>		<span class="kd">var</span> <span class="nx">end</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">getTime</span><span class="p">());</span></div><div class='line' id='LC457'>		<span class="nx">end</span><span class="p">.</span><span class="nx">setHours</span><span class="p">(</span><span class="nx">time_end</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span></div><div class='line' id='LC458'>		<span class="nx">end</span><span class="p">.</span><span class="nx">setMinutes</span><span class="p">(</span><span class="nx">time_end</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC459'><br/></div><div class='line' id='LC460'>		<span class="nx">data</span><span class="p">.</span><span class="nx">all_day</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC461'>		<span class="nx">data</span><span class="p">.</span><span class="nx">by_hour</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC462'>		<span class="nx">data</span><span class="p">.</span><span class="nx">after_time</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC463'>		<span class="nx">data</span><span class="p">.</span><span class="nx">before_time</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC464'>		<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">events</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span> <span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC465'>			<span class="kd">var</span> <span class="nx">s</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">start</span><span class="p">));</span></div><div class='line' id='LC466'>			<span class="kd">var</span> <span class="nx">f</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">end</span><span class="p">));</span></div><div class='line' id='LC467'><br/></div><div class='line' id='LC468'>			<span class="nx">e</span><span class="p">.</span><span class="nx">start_hour</span> <span class="o">=</span> <span class="nx">s</span><span class="p">.</span><span class="nx">getHours</span><span class="p">().</span><span class="nx">toString</span><span class="p">().</span><span class="nx">formatNum</span><span class="p">(</span><span class="mi">2</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;:&#39;</span> <span class="o">+</span> <span class="nx">s</span><span class="p">.</span><span class="nx">getMinutes</span><span class="p">().</span><span class="nx">toString</span><span class="p">().</span><span class="nx">formatNum</span><span class="p">(</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC469'>			<span class="nx">e</span><span class="p">.</span><span class="nx">end_hour</span> <span class="o">=</span> <span class="nx">f</span><span class="p">.</span><span class="nx">getHours</span><span class="p">().</span><span class="nx">toString</span><span class="p">().</span><span class="nx">formatNum</span><span class="p">(</span><span class="mi">2</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;:&#39;</span> <span class="o">+</span> <span class="nx">f</span><span class="p">.</span><span class="nx">getMinutes</span><span class="p">().</span><span class="nx">toString</span><span class="p">().</span><span class="nx">formatNum</span><span class="p">(</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC470'><br/></div><div class='line' id='LC471'>			<span class="k">if</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">start</span> <span class="o">&lt;</span> <span class="nx">start</span><span class="p">.</span><span class="nx">getTime</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC472'>				<span class="nx">warn</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC473'>				<span class="nx">e</span><span class="p">.</span><span class="nx">start_hour</span> <span class="o">=</span> <span class="nx">s</span><span class="p">.</span><span class="nx">getDate</span><span class="p">()</span> <span class="o">+</span> <span class="s1">&#39; &#39;</span> <span class="o">+</span> <span class="nx">$self</span><span class="p">.</span><span class="nx">locale</span><span class="p">[</span><span class="s1">&#39;ms&#39;</span> <span class="o">+</span> <span class="nx">s</span><span class="p">.</span><span class="nx">getMonth</span><span class="p">()]</span> <span class="o">+</span> <span class="s1">&#39; &#39;</span> <span class="o">+</span> <span class="nx">e</span><span class="p">.</span><span class="nx">start_hour</span><span class="p">;</span></div><div class='line' id='LC474'>			<span class="p">}</span></div><div class='line' id='LC475'><br/></div><div class='line' id='LC476'>			<span class="k">if</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">end</span> <span class="o">&gt;</span> <span class="nx">end</span><span class="p">.</span><span class="nx">getTime</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC477'>				<span class="nx">warn</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC478'>				<span class="nx">e</span><span class="p">.</span><span class="nx">end_hour</span> <span class="o">=</span> <span class="nx">f</span><span class="p">.</span><span class="nx">getDate</span><span class="p">()</span> <span class="o">+</span> <span class="s1">&#39; &#39;</span> <span class="o">+</span> <span class="nx">$self</span><span class="p">.</span><span class="nx">locale</span><span class="p">[</span><span class="s1">&#39;ms&#39;</span> <span class="o">+</span> <span class="nx">f</span><span class="p">.</span><span class="nx">getMonth</span><span class="p">()]</span> <span class="o">+</span> <span class="s1">&#39; &#39;</span> <span class="o">+</span> <span class="nx">e</span><span class="p">.</span><span class="nx">end_hour</span><span class="p">;</span></div><div class='line' id='LC479'>			<span class="p">}</span></div><div class='line' id='LC480'><br/></div><div class='line' id='LC481'>			<span class="k">if</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">start</span> <span class="o">&lt;</span> <span class="nx">start</span><span class="p">.</span><span class="nx">getTime</span><span class="p">()</span> <span class="o">&amp;&amp;</span> <span class="nx">e</span><span class="p">.</span><span class="nx">end</span> <span class="o">&gt;</span> <span class="nx">end</span><span class="p">.</span><span class="nx">getTime</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC482'>				<span class="nx">data</span><span class="p">.</span><span class="nx">all_day</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC483'>				<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC484'>			<span class="p">}</span></div><div class='line' id='LC485'><br/></div><div class='line' id='LC486'>			<span class="k">if</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">end</span> <span class="o">&lt;</span> <span class="nx">start</span><span class="p">.</span><span class="nx">getTime</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC487'>				<span class="nx">data</span><span class="p">.</span><span class="nx">before_time</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC488'>				<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC489'>			<span class="p">}</span></div><div class='line' id='LC490'><br/></div><div class='line' id='LC491'>			<span class="k">if</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">start</span> <span class="o">&gt;</span> <span class="nx">end</span><span class="p">.</span><span class="nx">getTime</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC492'>				<span class="nx">data</span><span class="p">.</span><span class="nx">after_time</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC493'>				<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC494'>			<span class="p">}</span></div><div class='line' id='LC495'><br/></div><div class='line' id='LC496'>			<span class="kd">var</span> <span class="nx">event_start</span> <span class="o">=</span> <span class="nx">start</span><span class="p">.</span><span class="nx">getTime</span><span class="p">()</span> <span class="o">-</span> <span class="nx">e</span><span class="p">.</span><span class="nx">start</span><span class="p">;</span></div><div class='line' id='LC497'><br/></div><div class='line' id='LC498'>			<span class="k">if</span><span class="p">(</span><span class="nx">event_start</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC499'>				<span class="nx">e</span><span class="p">.</span><span class="nx">top</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC500'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC501'>				<span class="nx">e</span><span class="p">.</span><span class="nx">top</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">event_start</span><span class="p">)</span> <span class="o">/</span> <span class="nx">ms_per_line</span><span class="p">;</span></div><div class='line' id='LC502'>			<span class="p">}</span></div><div class='line' id='LC503'><br/></div><div class='line' id='LC504'>			<span class="kd">var</span> <span class="nx">lines_left</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">lines</span> <span class="o">-</span> <span class="nx">e</span><span class="p">.</span><span class="nx">top</span><span class="p">);</span></div><div class='line' id='LC505'>			<span class="kd">var</span> <span class="nx">lines_in_event</span> <span class="o">=</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">end</span> <span class="o">-</span> <span class="nx">e</span><span class="p">.</span><span class="nx">start</span><span class="p">)</span> <span class="o">/</span> <span class="nx">ms_per_line</span><span class="p">;</span></div><div class='line' id='LC506'>			<span class="k">if</span><span class="p">(</span><span class="nx">event_start</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC507'>				<span class="nx">lines_in_event</span> <span class="o">=</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">end</span> <span class="o">-</span> <span class="nx">start</span><span class="p">.</span><span class="nx">getTime</span><span class="p">())</span> <span class="o">/</span> <span class="nx">ms_per_line</span><span class="p">;</span></div><div class='line' id='LC508'>			<span class="p">}</span></div><div class='line' id='LC509'><br/></div><div class='line' id='LC510'><br/></div><div class='line' id='LC511'>			<span class="nx">e</span><span class="p">.</span><span class="nx">lines</span> <span class="o">=</span> <span class="nx">lines_in_event</span><span class="p">;</span></div><div class='line' id='LC512'>			<span class="k">if</span><span class="p">(</span><span class="nx">lines_in_event</span> <span class="o">&gt;</span> <span class="nx">lines_left</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC513'>				<span class="nx">e</span><span class="p">.</span><span class="nx">lines</span> <span class="o">=</span> <span class="nx">lines_left</span><span class="p">;</span></div><div class='line' id='LC514'>			<span class="p">}</span></div><div class='line' id='LC515'><br/></div><div class='line' id='LC516'>			<span class="nx">data</span><span class="p">.</span><span class="nx">by_hour</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC517'>		<span class="p">});</span></div><div class='line' id='LC518'><br/></div><div class='line' id='LC519'>		<span class="c1">//var d = new Date(&#39;2013-03-14 13:20:00&#39;);</span></div><div class='line' id='LC520'>		<span class="c1">//warn(d.getTime());</span></div><div class='line' id='LC521'>	<span class="p">};</span></div><div class='line' id='LC522'><br/></div><div class='line' id='LC523'>	<span class="nx">Calendar</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_hour</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">hour</span><span class="p">,</span> <span class="nx">part</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC524'>		<span class="kd">var</span> <span class="nx">time_start</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">time_start</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;:&quot;</span><span class="p">);</span></div><div class='line' id='LC525'>		<span class="kd">var</span> <span class="nx">time_split</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">time_split</span><span class="p">);</span></div><div class='line' id='LC526'><br/></div><div class='line' id='LC527'>		<span class="kd">var</span> <span class="nx">hour</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">time_start</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="o">+</span> <span class="nx">hour</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">time_split</span> <span class="o">/</span> <span class="mi">60</span><span class="p">,</span> <span class="mi">1</span><span class="p">));</span></div><div class='line' id='LC528'>		<span class="kd">var</span> <span class="nx">minute</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="nx">time_split</span> <span class="o">*</span> <span class="nx">part</span><span class="p">);</span></div><div class='line' id='LC529'><br/></div><div class='line' id='LC530'>		<span class="k">return</span> <span class="nx">hour</span><span class="p">.</span><span class="nx">formatNum</span><span class="p">(</span><span class="mi">2</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;:&quot;</span> <span class="o">+</span> <span class="nx">minute</span><span class="p">.</span><span class="nx">formatNum</span><span class="p">(</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC531'>	<span class="p">}</span></div><div class='line' id='LC532'><br/></div><div class='line' id='LC533'>	<span class="nx">Calendar</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_week</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC534'>		<span class="k">this</span><span class="p">.</span><span class="nx">_loadTemplate</span><span class="p">(</span><span class="s1">&#39;week-days&#39;</span><span class="p">);</span></div><div class='line' id='LC535'><br/></div><div class='line' id='LC536'>		<span class="kd">var</span> <span class="nx">t</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC537'>		<span class="kd">var</span> <span class="nx">start</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">getTime</span><span class="p">());</span></div><div class='line' id='LC538'>		<span class="kd">var</span> <span class="nx">end</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">end</span><span class="p">.</span><span class="nx">getTime</span><span class="p">());</span></div><div class='line' id='LC539'>		<span class="kd">var</span> <span class="nx">events</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC540'>		<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC541'>		<span class="kd">var</span> <span class="nx">first_day</span> <span class="o">=</span> <span class="nx">getExtentedOption</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;first_day&#39;</span><span class="p">);</span></div><div class='line' id='LC542'><br/></div><div class='line' id='LC543'>		<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getEventsBetween</span><span class="p">(</span><span class="nx">start</span><span class="p">,</span> <span class="nx">end</span><span class="p">),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span> <span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC544'>			<span class="nx">event</span><span class="p">.</span><span class="nx">start_day</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">start</span><span class="p">)).</span><span class="nx">getDay</span><span class="p">();</span></div><div class='line' id='LC545'>			<span class="k">if</span><span class="p">(</span><span class="nx">first_day</span> <span class="o">==</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC546'>				<span class="nx">event</span><span class="p">.</span><span class="nx">start_day</span> <span class="o">=</span> <span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">start_day</span> <span class="o">+</span> <span class="mi">6</span><span class="p">)</span> <span class="o">%</span> <span class="mi">7</span><span class="p">;</span></div><div class='line' id='LC547'>			<span class="p">}</span></div><div class='line' id='LC548'>			<span class="k">if</span><span class="p">((</span><span class="nx">event</span><span class="p">.</span><span class="nx">end</span> <span class="o">-</span> <span class="nx">event</span><span class="p">.</span><span class="nx">start</span><span class="p">)</span> <span class="o">&lt;=</span> <span class="mi">86400000</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC549'>				<span class="nx">event</span><span class="p">.</span><span class="nx">days</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC550'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC551'>				<span class="nx">event</span><span class="p">.</span><span class="nx">days</span> <span class="o">=</span> <span class="p">((</span><span class="nx">event</span><span class="p">.</span><span class="nx">end</span> <span class="o">-</span> <span class="nx">event</span><span class="p">.</span><span class="nx">start</span><span class="p">)</span> <span class="o">/</span> <span class="mi">86400000</span><span class="p">);</span></div><div class='line' id='LC552'>			<span class="p">}</span></div><div class='line' id='LC553'><br/></div><div class='line' id='LC554'>			<span class="k">if</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">start</span> <span class="o">&lt;</span> <span class="nx">start</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC555'><br/></div><div class='line' id='LC556'>				<span class="nx">event</span><span class="p">.</span><span class="nx">days</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">days</span> <span class="o">-</span> <span class="p">((</span><span class="nx">start</span> <span class="o">-</span> <span class="nx">event</span><span class="p">.</span><span class="nx">start</span><span class="p">)</span> <span class="o">/</span> <span class="mi">86400000</span><span class="p">);</span></div><div class='line' id='LC557'>				<span class="nx">event</span><span class="p">.</span><span class="nx">start_day</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC558'>			<span class="p">}</span></div><div class='line' id='LC559'><br/></div><div class='line' id='LC560'>			<span class="nx">event</span><span class="p">.</span><span class="nx">days</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">days</span><span class="p">);</span></div><div class='line' id='LC561'><br/></div><div class='line' id='LC562'>			<span class="k">if</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">start_day</span> <span class="o">+</span> <span class="nx">event</span><span class="p">.</span><span class="nx">days</span> <span class="o">&gt;</span> <span class="mi">7</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC563'>				<span class="nx">event</span><span class="p">.</span><span class="nx">days</span> <span class="o">=</span> <span class="mi">7</span> <span class="o">-</span> <span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">start_day</span><span class="p">);</span></div><div class='line' id='LC564'>			<span class="p">}</span></div><div class='line' id='LC565'><br/></div><div class='line' id='LC566'>			<span class="nx">events</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC567'>		<span class="p">});</span></div><div class='line' id='LC568'>		<span class="nx">t</span><span class="p">.</span><span class="nx">events</span> <span class="o">=</span> <span class="nx">events</span><span class="p">;</span></div><div class='line' id='LC569'>		<span class="nx">t</span><span class="p">.</span><span class="nx">cal</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC570'>		<span class="k">return</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">templates</span><span class="p">[</span><span class="s1">&#39;week-days&#39;</span><span class="p">](</span><span class="nx">t</span><span class="p">);</span></div><div class='line' id='LC571'>	<span class="p">}</span></div><div class='line' id='LC572'><br/></div><div class='line' id='LC573'>	<span class="nx">Calendar</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_month</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">month</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC574'>		<span class="k">this</span><span class="p">.</span><span class="nx">_loadTemplate</span><span class="p">(</span><span class="s1">&#39;year-month&#39;</span><span class="p">);</span></div><div class='line' id='LC575'><br/></div><div class='line' id='LC576'>		<span class="kd">var</span> <span class="nx">t</span> <span class="o">=</span> <span class="p">{</span><span class="nx">cal</span><span class="o">:</span> <span class="k">this</span><span class="p">};</span></div><div class='line' id='LC577'>		<span class="kd">var</span> <span class="nx">newmonth</span> <span class="o">=</span> <span class="nx">month</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC578'>		<span class="nx">t</span><span class="p">.</span><span class="nx">data_day</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">getFullYear</span><span class="p">()</span> <span class="o">+</span> <span class="s1">&#39;-&#39;</span> <span class="o">+</span> <span class="p">(</span><span class="nx">newmonth</span> <span class="o">&lt;</span> <span class="mi">10</span> <span class="o">?</span> <span class="s1">&#39;0&#39;</span> <span class="o">+</span> <span class="nx">newmonth</span> <span class="o">:</span> <span class="nx">newmonth</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;-&#39;</span> <span class="o">+</span> <span class="s1">&#39;01&#39;</span><span class="p">;</span></div><div class='line' id='LC579'>		<span class="nx">t</span><span class="p">.</span><span class="nx">month_name</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">locale</span><span class="p">[</span><span class="s1">&#39;m&#39;</span> <span class="o">+</span> <span class="nx">month</span><span class="p">];</span></div><div class='line' id='LC580'><br/></div><div class='line' id='LC581'>		<span class="kd">var</span> <span class="nx">curdate</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">getFullYear</span><span class="p">(),</span> <span class="nx">month</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC582'>		<span class="nx">t</span><span class="p">.</span><span class="nx">start</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">curdate</span><span class="p">.</span><span class="nx">getTime</span><span class="p">());</span></div><div class='line' id='LC583'>		<span class="nx">t</span><span class="p">.</span><span class="nx">end</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">getFullYear</span><span class="p">(),</span> <span class="nx">month</span> <span class="o">+</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">).</span><span class="nx">getTime</span><span class="p">());</span></div><div class='line' id='LC584'>		<span class="nx">t</span><span class="p">.</span><span class="nx">events</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getEventsBetween</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">start</span><span class="p">,</span> <span class="nx">t</span><span class="p">.</span><span class="nx">end</span><span class="p">);</span></div><div class='line' id='LC585'>		<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">templates</span><span class="p">[</span><span class="s1">&#39;year-month&#39;</span><span class="p">](</span><span class="nx">t</span><span class="p">);</span></div><div class='line' id='LC586'>	<span class="p">}</span></div><div class='line' id='LC587'><br/></div><div class='line' id='LC588'>	<span class="nx">Calendar</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_day</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">week</span><span class="p">,</span> <span class="nx">day</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC589'>		<span class="k">this</span><span class="p">.</span><span class="nx">_loadTemplate</span><span class="p">(</span><span class="s1">&#39;month-day&#39;</span><span class="p">);</span></div><div class='line' id='LC590'><br/></div><div class='line' id='LC591'>		<span class="kd">var</span> <span class="nx">t</span> <span class="o">=</span> <span class="p">{</span><span class="nx">tooltip</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">,</span> <span class="nx">cal</span><span class="o">:</span> <span class="k">this</span><span class="p">};</span></div><div class='line' id='LC592'>		<span class="kd">var</span> <span class="nx">cls</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">classes</span><span class="p">.</span><span class="nx">months</span><span class="p">.</span><span class="nx">outmonth</span><span class="p">;</span></div><div class='line' id='LC593'><br/></div><div class='line' id='LC594'>		<span class="kd">var</span> <span class="nx">firstday</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">getDay</span><span class="p">();</span></div><div class='line' id='LC595'>		<span class="k">if</span><span class="p">(</span><span class="nx">getExtentedOption</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;first_day&#39;</span><span class="p">)</span> <span class="o">==</span> <span class="mi">2</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC596'>			<span class="nx">firstday</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC597'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC598'>			<span class="nx">firstday</span> <span class="o">=</span> <span class="p">(</span><span class="nx">firstday</span> <span class="o">==</span> <span class="mi">0</span> <span class="o">?</span> <span class="mi">7</span> <span class="o">:</span> <span class="nx">firstday</span><span class="p">);</span></div><div class='line' id='LC599'>		<span class="p">}</span></div><div class='line' id='LC600'><br/></div><div class='line' id='LC601'>		<span class="nx">day</span> <span class="o">=</span> <span class="p">(</span><span class="nx">day</span> <span class="o">-</span> <span class="nx">firstday</span><span class="p">)</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC602'>		<span class="kd">var</span> <span class="nx">curdate</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">getFullYear</span><span class="p">(),</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">getMonth</span><span class="p">(),</span> <span class="nx">day</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC603'><br/></div><div class='line' id='LC604'>		<span class="c1">// if day of the current month</span></div><div class='line' id='LC605'>		<span class="k">if</span><span class="p">(</span><span class="nx">day</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC606'>			<span class="nx">cls</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">classes</span><span class="p">.</span><span class="nx">months</span><span class="p">.</span><span class="nx">inmonth</span><span class="p">;</span></div><div class='line' id='LC607'>		<span class="p">}</span></div><div class='line' id='LC608'>		<span class="c1">// stop cycling table rows;</span></div><div class='line' id='LC609'>		<span class="kd">var</span> <span class="nx">daysinmonth</span> <span class="o">=</span> <span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">end</span><span class="p">.</span><span class="nx">getTime</span><span class="p">()</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)).</span><span class="nx">getDate</span><span class="p">();</span></div><div class='line' id='LC610'>		<span class="k">if</span><span class="p">((</span><span class="nx">day</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">&gt;</span> <span class="nx">daysinmonth</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC611'>			<span class="k">this</span><span class="p">.</span><span class="nx">stop_cycling</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC612'>		<span class="p">}</span></div><div class='line' id='LC613'>		<span class="c1">// if day of the next month</span></div><div class='line' id='LC614'>		<span class="k">if</span><span class="p">(</span><span class="nx">day</span> <span class="o">&gt;</span> <span class="nx">daysinmonth</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC615'>			<span class="nx">day</span> <span class="o">=</span> <span class="nx">day</span> <span class="o">-</span> <span class="nx">daysinmonth</span><span class="p">;</span></div><div class='line' id='LC616'>			<span class="nx">cls</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">classes</span><span class="p">.</span><span class="nx">months</span><span class="p">.</span><span class="nx">outmonth</span><span class="p">;</span></div><div class='line' id='LC617'>		<span class="p">}</span></div><div class='line' id='LC618'><br/></div><div class='line' id='LC619'>		<span class="nx">cls</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">trim</span><span class="p">(</span><span class="nx">cls</span> <span class="o">+</span> <span class="s2">&quot; &quot;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getDayClass</span><span class="p">(</span><span class="s2">&quot;months&quot;</span><span class="p">,</span> <span class="nx">curdate</span><span class="p">));</span></div><div class='line' id='LC620'><br/></div><div class='line' id='LC621'>		<span class="k">if</span><span class="p">(</span><span class="nx">day</span> <span class="o">&lt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC622'>			<span class="kd">var</span> <span class="nx">daysinprevmonth</span> <span class="o">=</span> <span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">getFullYear</span><span class="p">(),</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">getMonth</span><span class="p">(),</span> <span class="mi">0</span><span class="p">)).</span><span class="nx">getDate</span><span class="p">();</span></div><div class='line' id='LC623'>			<span class="nx">day</span> <span class="o">=</span> <span class="nx">daysinprevmonth</span> <span class="o">-</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">day</span><span class="p">);</span></div><div class='line' id='LC624'>			<span class="nx">cls</span> <span class="o">+=</span> <span class="s1">&#39; cal-month-first-row&#39;</span><span class="p">;</span></div><div class='line' id='LC625'>		<span class="p">}</span></div><div class='line' id='LC626'><br/></div><div class='line' id='LC627'>		<span class="kd">var</span> <span class="nx">holiday</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getHoliday</span><span class="p">(</span><span class="nx">curdate</span><span class="p">);</span></div><div class='line' id='LC628'>		<span class="k">if</span><span class="p">(</span><span class="nx">holiday</span> <span class="o">!==</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC629'>			<span class="nx">t</span><span class="p">.</span><span class="nx">tooltip</span> <span class="o">=</span> <span class="nx">holiday</span><span class="p">;</span></div><div class='line' id='LC630'>		<span class="p">}</span></div><div class='line' id='LC631'><br/></div><div class='line' id='LC632'>		<span class="nx">t</span><span class="p">.</span><span class="nx">data_day</span> <span class="o">=</span> <span class="nx">curdate</span><span class="p">.</span><span class="nx">getFullYear</span><span class="p">()</span> <span class="o">+</span> <span class="s1">&#39;-&#39;</span> <span class="o">+</span> <span class="nx">curdate</span><span class="p">.</span><span class="nx">getMonthFormatted</span><span class="p">()</span> <span class="o">+</span> <span class="s1">&#39;-&#39;</span> <span class="o">+</span> <span class="p">(</span><span class="nx">day</span> <span class="o">&lt;</span> <span class="mi">10</span> <span class="o">?</span> <span class="s1">&#39;0&#39;</span> <span class="o">+</span> <span class="nx">day</span> <span class="o">:</span> <span class="nx">day</span><span class="p">);</span></div><div class='line' id='LC633'>		<span class="nx">t</span><span class="p">.</span><span class="nx">cls</span> <span class="o">=</span> <span class="nx">cls</span><span class="p">;</span></div><div class='line' id='LC634'>		<span class="nx">t</span><span class="p">.</span><span class="nx">day</span> <span class="o">=</span> <span class="nx">day</span><span class="p">;</span></div><div class='line' id='LC635'><br/></div><div class='line' id='LC636'>		<span class="nx">t</span><span class="p">.</span><span class="nx">start</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">curdate</span><span class="p">.</span><span class="nx">getTime</span><span class="p">());</span></div><div class='line' id='LC637'>		<span class="nx">t</span><span class="p">.</span><span class="nx">end</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">start</span> <span class="o">+</span> <span class="mi">86400000</span><span class="p">);</span></div><div class='line' id='LC638'>		<span class="nx">t</span><span class="p">.</span><span class="nx">events</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getEventsBetween</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">start</span><span class="p">,</span> <span class="nx">t</span><span class="p">.</span><span class="nx">end</span><span class="p">);</span></div><div class='line' id='LC639'>		<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">templates</span><span class="p">[</span><span class="s1">&#39;month-day&#39;</span><span class="p">](</span><span class="nx">t</span><span class="p">);</span></div><div class='line' id='LC640'>	<span class="p">}</span></div><div class='line' id='LC641'><br/></div><div class='line' id='LC642'>	<span class="nx">Calendar</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_getHoliday</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">date</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC643'>		<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC644'>		<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">getHolidays</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">date</span><span class="p">.</span><span class="nx">getFullYear</span><span class="p">()),</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC645'>			<span class="kd">var</span> <span class="nx">found</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC646'>			<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">days</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC647'>				<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">toDateString</span><span class="p">()</span> <span class="o">==</span> <span class="nx">date</span><span class="p">.</span><span class="nx">toDateString</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC648'>					<span class="nx">found</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC649'>					<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC650'>				<span class="p">}</span></div><div class='line' id='LC651'>			<span class="p">});</span></div><div class='line' id='LC652'>			<span class="k">if</span><span class="p">(</span><span class="nx">found</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC653'>				<span class="nx">result</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="p">;</span></div><div class='line' id='LC654'>				<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC655'>			<span class="p">}</span></div><div class='line' id='LC656'>		<span class="p">});</span></div><div class='line' id='LC657'>		<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC658'>	<span class="p">};</span></div><div class='line' id='LC659'><br/></div><div class='line' id='LC660'>	<span class="nx">Calendar</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_getHolidayName</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">date</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC661'>		<span class="kd">var</span> <span class="nx">holiday</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getHoliday</span><span class="p">(</span><span class="nx">date</span><span class="p">);</span></div><div class='line' id='LC662'>		<span class="k">return</span> <span class="p">(</span><span class="nx">holiday</span> <span class="o">===</span> <span class="kc">false</span><span class="p">)</span> <span class="o">?</span> <span class="s2">&quot;&quot;</span> <span class="o">:</span> <span class="nx">holiday</span><span class="p">;</span></div><div class='line' id='LC663'>	<span class="p">};</span></div><div class='line' id='LC664'><br/></div><div class='line' id='LC665'>	<span class="nx">Calendar</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_getDayClass</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">class_group</span><span class="p">,</span> <span class="nx">date</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC666'>		<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC667'>		<span class="kd">var</span> <span class="nx">addClass</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">which</span><span class="p">,</span> <span class="nx">to</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC668'>			<span class="kd">var</span> <span class="nx">cls</span><span class="p">;</span></div><div class='line' id='LC669'>			<span class="nx">cls</span> <span class="o">=</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">classes</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">class_group</span> <span class="k">in</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">classes</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">which</span> <span class="k">in</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">classes</span><span class="p">[</span><span class="nx">class_group</span><span class="p">]))</span> <span class="o">?</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">classes</span><span class="p">[</span><span class="nx">class_group</span><span class="p">][</span><span class="nx">which</span><span class="p">]</span> <span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC670'>			<span class="k">if</span><span class="p">((</span><span class="k">typeof</span><span class="p">(</span><span class="nx">cls</span><span class="p">)</span> <span class="o">==</span> <span class="s2">&quot;string&quot;</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">cls</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC671'>				<span class="nx">to</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">cls</span><span class="p">);</span></div><div class='line' id='LC672'>			<span class="p">}</span></div><div class='line' id='LC673'>		<span class="p">};</span></div><div class='line' id='LC674'>		<span class="kd">var</span> <span class="nx">classes</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC675'>		<span class="k">if</span><span class="p">(</span><span class="nx">date</span><span class="p">.</span><span class="nx">toDateString</span><span class="p">()</span> <span class="o">==</span> <span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">()).</span><span class="nx">toDateString</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC676'>			<span class="nx">addClass</span><span class="p">(</span><span class="s2">&quot;today&quot;</span><span class="p">,</span> <span class="nx">classes</span><span class="p">);</span></div><div class='line' id='LC677'>		<span class="p">}</span></div><div class='line' id='LC678'>		<span class="kd">var</span> <span class="nx">holiday</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getHoliday</span><span class="p">(</span><span class="nx">date</span><span class="p">);</span></div><div class='line' id='LC679'>		<span class="k">if</span><span class="p">(</span><span class="nx">holiday</span> <span class="o">!==</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC680'>			<span class="nx">addClass</span><span class="p">(</span><span class="s2">&quot;holidays&quot;</span><span class="p">,</span> <span class="nx">classes</span><span class="p">);</span></div><div class='line' id='LC681'>		<span class="p">}</span></div><div class='line' id='LC682'>		<span class="k">switch</span><span class="p">(</span><span class="nx">date</span><span class="p">.</span><span class="nx">getDay</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC683'>			<span class="k">case</span> <span class="mi">0</span><span class="o">:</span></div><div class='line' id='LC684'>				<span class="nx">addClass</span><span class="p">(</span><span class="s2">&quot;sunday&quot;</span><span class="p">,</span> <span class="nx">classes</span><span class="p">);</span></div><div class='line' id='LC685'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC686'>			<span class="k">case</span> <span class="mi">6</span><span class="o">:</span></div><div class='line' id='LC687'>				<span class="nx">addClass</span><span class="p">(</span><span class="s2">&quot;saturday&quot;</span><span class="p">,</span> <span class="nx">classes</span><span class="p">);</span></div><div class='line' id='LC688'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC689'>		<span class="p">}</span></div><div class='line' id='LC690'><br/></div><div class='line' id='LC691'>		<span class="nx">addClass</span><span class="p">(</span><span class="nx">date</span><span class="p">.</span><span class="nx">toDateString</span><span class="p">(),</span> <span class="nx">classes</span><span class="p">);</span></div><div class='line' id='LC692'><br/></div><div class='line' id='LC693'>		<span class="k">return</span> <span class="nx">classes</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot; &quot;</span><span class="p">);</span></div><div class='line' id='LC694'>	<span class="p">};</span></div><div class='line' id='LC695'><br/></div><div class='line' id='LC696'>	<span class="nx">Calendar</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">view</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">view</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC697'>		<span class="k">if</span><span class="p">(</span><span class="nx">view</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC698'>			<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">views</span><span class="p">[</span><span class="nx">view</span><span class="p">].</span><span class="nx">enable</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC699'>				<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC700'>			<span class="p">}</span></div><div class='line' id='LC701'>			<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">view</span> <span class="o">=</span> <span class="nx">view</span><span class="p">;</span></div><div class='line' id='LC702'>		<span class="p">}</span></div><div class='line' id='LC703'><br/></div><div class='line' id='LC704'><br/></div><div class='line' id='LC705'>		<span class="k">this</span><span class="p">.</span><span class="nx">_init_position</span><span class="p">();</span></div><div class='line' id='LC706'>		<span class="k">this</span><span class="p">.</span><span class="nx">_loadEvents</span><span class="p">();</span></div><div class='line' id='LC707'>		<span class="k">this</span><span class="p">.</span><span class="nx">_render</span><span class="p">();</span></div><div class='line' id='LC708'><br/></div><div class='line' id='LC709'>		<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">onAfterViewLoad</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">view</span><span class="p">);</span></div><div class='line' id='LC710'>	<span class="p">};</span></div><div class='line' id='LC711'><br/></div><div class='line' id='LC712'>	<span class="nx">Calendar</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">navigate</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">where</span><span class="p">,</span> <span class="nx">next</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC713'>		<span class="kd">var</span> <span class="nx">to</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">);</span></div><div class='line' id='LC714'>		<span class="k">if</span><span class="p">(</span><span class="nx">where</span> <span class="o">==</span> <span class="s1">&#39;next&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC715'>			<span class="k">switch</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">view</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC716'>				<span class="k">case</span> <span class="s1">&#39;year&#39;</span><span class="o">:</span></div><div class='line' id='LC717'>					<span class="nx">to</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">setFullYear</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">getFullYear</span><span class="p">()</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC718'>					<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC719'>				<span class="k">case</span> <span class="s1">&#39;month&#39;</span><span class="o">:</span></div><div class='line' id='LC720'>					<span class="nx">to</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">setMonth</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">getMonth</span><span class="p">()</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC721'>					<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC722'>				<span class="k">case</span> <span class="s1">&#39;week&#39;</span><span class="o">:</span></div><div class='line' id='LC723'>					<span class="nx">to</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">setDate</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">getDate</span><span class="p">()</span> <span class="o">+</span> <span class="mi">7</span><span class="p">);</span></div><div class='line' id='LC724'>					<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC725'>				<span class="k">case</span> <span class="s1">&#39;day&#39;</span><span class="o">:</span></div><div class='line' id='LC726'>					<span class="nx">to</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">setDate</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">getDate</span><span class="p">()</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC727'>					<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC728'>			<span class="p">}</span></div><div class='line' id='LC729'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">where</span> <span class="o">==</span> <span class="s1">&#39;prev&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC730'>			<span class="k">switch</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">view</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC731'>				<span class="k">case</span> <span class="s1">&#39;year&#39;</span><span class="o">:</span></div><div class='line' id='LC732'>					<span class="nx">to</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">setFullYear</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">getFullYear</span><span class="p">()</span> <span class="o">-</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC733'>					<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC734'>				<span class="k">case</span> <span class="s1">&#39;month&#39;</span><span class="o">:</span></div><div class='line' id='LC735'>					<span class="nx">to</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">setMonth</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">getMonth</span><span class="p">()</span> <span class="o">-</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC736'>					<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC737'>				<span class="k">case</span> <span class="s1">&#39;week&#39;</span><span class="o">:</span></div><div class='line' id='LC738'>					<span class="nx">to</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">setDate</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">getDate</span><span class="p">()</span> <span class="o">-</span> <span class="mi">7</span><span class="p">);</span></div><div class='line' id='LC739'>					<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC740'>				<span class="k">case</span> <span class="s1">&#39;day&#39;</span><span class="o">:</span></div><div class='line' id='LC741'>					<span class="nx">to</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">setDate</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">getDate</span><span class="p">()</span> <span class="o">-</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC742'>					<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC743'>			<span class="p">}</span></div><div class='line' id='LC744'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">where</span> <span class="o">==</span> <span class="s1">&#39;today&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC745'>			<span class="nx">to</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">setTime</span><span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">().</span><span class="nx">getTime</span><span class="p">());</span></div><div class='line' id='LC746'>		<span class="p">}</span></div><div class='line' id='LC747'>		<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC748'>			<span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">locale</span><span class="p">.</span><span class="nx">error_where</span><span class="p">.</span><span class="nx">format</span><span class="p">(</span><span class="nx">where</span><span class="p">))</span></div><div class='line' id='LC749'>		<span class="p">}</span></div><div class='line' id='LC750'>		<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">day</span> <span class="o">=</span> <span class="nx">to</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">getFullYear</span><span class="p">()</span> <span class="o">+</span> <span class="s1">&#39;-&#39;</span> <span class="o">+</span> <span class="nx">to</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">getMonthFormatted</span><span class="p">()</span> <span class="o">+</span> <span class="s1">&#39;-&#39;</span> <span class="o">+</span> <span class="nx">to</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">getDateFormatted</span><span class="p">();</span></div><div class='line' id='LC751'>		<span class="k">this</span><span class="p">.</span><span class="nx">view</span><span class="p">();</span></div><div class='line' id='LC752'>		<span class="k">if</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">next</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC753'>			<span class="nx">next</span><span class="p">();</span></div><div class='line' id='LC754'>		<span class="p">}</span></div><div class='line' id='LC755'>	<span class="p">};</span></div><div class='line' id='LC756'><br/></div><div class='line' id='LC757'>	<span class="nx">Calendar</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_init_position</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC758'>		<span class="kd">var</span> <span class="nx">year</span><span class="p">,</span> <span class="nx">month</span><span class="p">,</span> <span class="nx">day</span><span class="p">;</span></div><div class='line' id='LC759'><br/></div><div class='line' id='LC760'>		<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">day</span> <span class="o">==</span> <span class="s1">&#39;now&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC761'>			<span class="kd">var</span> <span class="nx">date</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">();</span></div><div class='line' id='LC762'>			<span class="nx">year</span> <span class="o">=</span> <span class="nx">date</span><span class="p">.</span><span class="nx">getFullYear</span><span class="p">();</span></div><div class='line' id='LC763'>			<span class="nx">month</span> <span class="o">=</span> <span class="nx">date</span><span class="p">.</span><span class="nx">getMonth</span><span class="p">();</span></div><div class='line' id='LC764'>			<span class="nx">day</span> <span class="o">=</span> <span class="nx">date</span><span class="p">.</span><span class="nx">getDate</span><span class="p">();</span></div><div class='line' id='LC765'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">day</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^\d{4}-\d{2}-\d{2}$/g</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC766'>			<span class="kd">var</span> <span class="nx">list</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">day</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;-&#39;</span><span class="p">);</span></div><div class='line' id='LC767'>			<span class="nx">year</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">list</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="mi">10</span><span class="p">);</span></div><div class='line' id='LC768'>			<span class="nx">month</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">list</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span> <span class="mi">10</span><span class="p">)</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC769'>			<span class="nx">day</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">list</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span> <span class="mi">10</span><span class="p">);</span></div><div class='line' id='LC770'>		<span class="p">}</span></div><div class='line' id='LC771'>		<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC772'>			<span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">locale</span><span class="p">.</span><span class="nx">error_dateformat</span><span class="p">.</span><span class="nx">format</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">day</span><span class="p">));</span></div><div class='line' id='LC773'>		<span class="p">}</span></div><div class='line' id='LC774'><br/></div><div class='line' id='LC775'>		<span class="k">switch</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">view</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC776'>			<span class="k">case</span> <span class="s1">&#39;year&#39;</span><span class="o">:</span></div><div class='line' id='LC777'>				<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">setTime</span><span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">year</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">).</span><span class="nx">getTime</span><span class="p">());</span></div><div class='line' id='LC778'>				<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">end</span><span class="p">.</span><span class="nx">setTime</span><span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">year</span> <span class="o">+</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">).</span><span class="nx">getTime</span><span class="p">());</span></div><div class='line' id='LC779'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC780'>			<span class="k">case</span> <span class="s1">&#39;month&#39;</span><span class="o">:</span></div><div class='line' id='LC781'>				<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">setTime</span><span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">year</span><span class="p">,</span> <span class="nx">month</span><span class="p">,</span> <span class="mi">1</span><span class="p">).</span><span class="nx">getTime</span><span class="p">());</span></div><div class='line' id='LC782'>				<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">end</span><span class="p">.</span><span class="nx">setTime</span><span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">year</span><span class="p">,</span> <span class="nx">month</span> <span class="o">+</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">).</span><span class="nx">getTime</span><span class="p">());</span></div><div class='line' id='LC783'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC784'>			<span class="k">case</span> <span class="s1">&#39;day&#39;</span><span class="o">:</span></div><div class='line' id='LC785'>				<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">setTime</span><span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">year</span><span class="p">,</span> <span class="nx">month</span><span class="p">,</span> <span class="nx">day</span><span class="p">).</span><span class="nx">getTime</span><span class="p">());</span></div><div class='line' id='LC786'>				<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">end</span><span class="p">.</span><span class="nx">setTime</span><span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">year</span><span class="p">,</span> <span class="nx">month</span><span class="p">,</span> <span class="nx">day</span> <span class="o">+</span> <span class="mi">1</span><span class="p">).</span><span class="nx">getTime</span><span class="p">());</span></div><div class='line' id='LC787'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC788'>			<span class="k">case</span> <span class="s1">&#39;week&#39;</span><span class="o">:</span></div><div class='line' id='LC789'>				<span class="kd">var</span> <span class="nx">curr</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">year</span><span class="p">,</span> <span class="nx">month</span><span class="p">,</span> <span class="nx">day</span><span class="p">);</span></div><div class='line' id='LC790'>				<span class="kd">var</span> <span class="nx">first</span><span class="p">;</span></div><div class='line' id='LC791'>				<span class="k">if</span><span class="p">(</span><span class="nx">getExtentedOption</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;first_day&#39;</span><span class="p">)</span> <span class="o">==</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC792'>					<span class="nx">first</span> <span class="o">=</span> <span class="nx">curr</span><span class="p">.</span><span class="nx">getDate</span><span class="p">()</span> <span class="o">-</span> <span class="p">((</span><span class="nx">curr</span><span class="p">.</span><span class="nx">getDay</span><span class="p">()</span> <span class="o">+</span> <span class="mi">6</span><span class="p">)</span> <span class="o">%</span> <span class="mi">7</span><span class="p">);</span></div><div class='line' id='LC793'>				<span class="p">}</span></div><div class='line' id='LC794'>				<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC795'>					<span class="nx">first</span> <span class="o">=</span> <span class="nx">curr</span><span class="p">.</span><span class="nx">getDate</span><span class="p">()</span> <span class="o">-</span> <span class="nx">curr</span><span class="p">.</span><span class="nx">getDay</span><span class="p">();</span></div><div class='line' id='LC796'>				<span class="p">}</span></div><div class='line' id='LC797'>				<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">setTime</span><span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">year</span><span class="p">,</span> <span class="nx">month</span><span class="p">,</span> <span class="nx">first</span><span class="p">).</span><span class="nx">getTime</span><span class="p">());</span></div><div class='line' id='LC798'>				<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">end</span><span class="p">.</span><span class="nx">setTime</span><span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">year</span><span class="p">,</span> <span class="nx">month</span><span class="p">,</span> <span class="nx">first</span> <span class="o">+</span> <span class="mi">7</span><span class="p">).</span><span class="nx">getTime</span><span class="p">());</span></div><div class='line' id='LC799'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC800'>			<span class="k">default</span><span class="o">:</span></div><div class='line' id='LC801'>				<span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">locale</span><span class="p">.</span><span class="nx">error_noview</span><span class="p">.</span><span class="nx">format</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">view</span><span class="p">))</span></div><div class='line' id='LC802'>		<span class="p">}</span></div><div class='line' id='LC803'>		<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC804'>	<span class="p">};</span></div><div class='line' id='LC805'><br/></div><div class='line' id='LC806'>	<span class="nx">Calendar</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">getTitle</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC807'>		<span class="kd">var</span> <span class="nx">p</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">;</span></div><div class='line' id='LC808'>		<span class="k">switch</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">view</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC809'>			<span class="k">case</span> <span class="s1">&#39;year&#39;</span><span class="o">:</span></div><div class='line' id='LC810'>				<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">locale</span><span class="p">.</span><span class="nx">title_year</span><span class="p">.</span><span class="nx">format</span><span class="p">(</span><span class="nx">p</span><span class="p">.</span><span class="nx">getFullYear</span><span class="p">());</span></div><div class='line' id='LC811'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC812'>			<span class="k">case</span> <span class="s1">&#39;month&#39;</span><span class="o">:</span></div><div class='line' id='LC813'>				<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">locale</span><span class="p">.</span><span class="nx">title_month</span><span class="p">.</span><span class="nx">format</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">locale</span><span class="p">[</span><span class="s1">&#39;m&#39;</span> <span class="o">+</span> <span class="nx">p</span><span class="p">.</span><span class="nx">getMonth</span><span class="p">()],</span> <span class="nx">p</span><span class="p">.</span><span class="nx">getFullYear</span><span class="p">());</span></div><div class='line' id='LC814'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC815'>			<span class="k">case</span> <span class="s1">&#39;week&#39;</span><span class="o">:</span></div><div class='line' id='LC816'>				<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">locale</span><span class="p">.</span><span class="nx">title_week</span><span class="p">.</span><span class="nx">format</span><span class="p">(</span><span class="nx">p</span><span class="p">.</span><span class="nx">getWeek</span><span class="p">(),</span> <span class="nx">p</span><span class="p">.</span><span class="nx">getFullYear</span><span class="p">());</span></div><div class='line' id='LC817'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC818'>			<span class="k">case</span> <span class="s1">&#39;day&#39;</span><span class="o">:</span></div><div class='line' id='LC819'>				<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">locale</span><span class="p">.</span><span class="nx">title_day</span><span class="p">.</span><span class="nx">format</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">locale</span><span class="p">[</span><span class="s1">&#39;d&#39;</span> <span class="o">+</span> <span class="nx">p</span><span class="p">.</span><span class="nx">getDay</span><span class="p">()],</span> <span class="nx">p</span><span class="p">.</span><span class="nx">getDate</span><span class="p">(),</span> <span class="k">this</span><span class="p">.</span><span class="nx">locale</span><span class="p">[</span><span class="s1">&#39;m&#39;</span> <span class="o">+</span> <span class="nx">p</span><span class="p">.</span><span class="nx">getMonth</span><span class="p">()],</span> <span class="nx">p</span><span class="p">.</span><span class="nx">getFullYear</span><span class="p">());</span></div><div class='line' id='LC820'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC821'>		<span class="p">}</span></div><div class='line' id='LC822'>		<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC823'>	<span class="p">};</span></div><div class='line' id='LC824'><br/></div><div class='line' id='LC825'>	<span class="nx">Calendar</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">isToday</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC826'>		<span class="kd">var</span> <span class="nx">now</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">().</span><span class="nx">getTime</span><span class="p">();</span></div><div class='line' id='LC827'><br/></div><div class='line' id='LC828'>		<span class="k">return</span> <span class="p">((</span><span class="nx">now</span> <span class="o">&gt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">now</span> <span class="o">&lt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">end</span><span class="p">));</span></div><div class='line' id='LC829'>	<span class="p">}</span></div><div class='line' id='LC830'><br/></div><div class='line' id='LC831'>	<span class="nx">Calendar</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">getStartDate</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC832'>		<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">;</span></div><div class='line' id='LC833'>	<span class="p">}</span></div><div class='line' id='LC834'><br/></div><div class='line' id='LC835'>	<span class="nx">Calendar</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">getEndDate</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC836'>		<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">end</span><span class="p">;</span></div><div class='line' id='LC837'>	<span class="p">}</span></div><div class='line' id='LC838'><br/></div><div class='line' id='LC839'>	<span class="nx">Calendar</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_loadEvents</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC840'>		<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC841'>		<span class="kd">var</span> <span class="nx">source</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC842'>		<span class="k">if</span><span class="p">(</span><span class="s1">&#39;events_source&#39;</span> <span class="k">in</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">events_source</span> <span class="o">!==</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC843'>			<span class="nx">source</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">events_source</span><span class="p">;</span></div><div class='line' id='LC844'>		<span class="p">}</span></div><div class='line' id='LC845'>		<span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="s1">&#39;events_url&#39;</span> <span class="k">in</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC846'>			<span class="nx">source</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">events_url</span><span class="p">;</span></div><div class='line' id='LC847'>			<span class="nx">warn</span><span class="p">(</span><span class="s1">&#39;The events_url option is DEPRECATED and it will be REMOVED in near future. Please use events_source instead.&#39;</span><span class="p">);</span></div><div class='line' id='LC848'>		<span class="p">}</span></div><div class='line' id='LC849'>		<span class="kd">var</span> <span class="nx">loader</span><span class="p">;</span></div><div class='line' id='LC850'>		<span class="k">switch</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">type</span><span class="p">(</span><span class="nx">source</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC851'>			<span class="k">case</span> <span class="s1">&#39;function&#39;</span><span class="o">:</span></div><div class='line' id='LC852'>				<span class="nx">loader</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC853'>					<span class="k">return</span> <span class="nx">source</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">,</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">end</span><span class="p">,</span> <span class="nx">browser_timezone</span><span class="p">);</span></div><div class='line' id='LC854'>				<span class="p">};</span></div><div class='line' id='LC855'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC856'>			<span class="k">case</span> <span class="s1">&#39;array&#39;</span><span class="o">:</span></div><div class='line' id='LC857'>				<span class="nx">loader</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC858'>					<span class="k">return</span> <span class="p">[].</span><span class="nx">concat</span><span class="p">(</span><span class="nx">source</span><span class="p">);</span></div><div class='line' id='LC859'>				<span class="p">};</span></div><div class='line' id='LC860'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC861'>			<span class="k">case</span> <span class="s1">&#39;string&#39;</span><span class="o">:</span></div><div class='line' id='LC862'>				<span class="k">if</span><span class="p">(</span><span class="nx">source</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC863'>					<span class="nx">loader</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC864'>						<span class="kd">var</span> <span class="nx">events</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC865'>						<span class="kd">var</span> <span class="nx">params</span> <span class="o">=</span> <span class="p">{</span><span class="nx">from</span><span class="o">:</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">getTime</span><span class="p">(),</span> <span class="nx">to</span><span class="o">:</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">end</span><span class="p">.</span><span class="nx">getTime</span><span class="p">()};</span></div><div class='line' id='LC866'>						<span class="k">if</span><span class="p">(</span><span class="nx">browser_timezone</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC867'>							<span class="nx">params</span><span class="p">.</span><span class="nx">browser_timezone</span> <span class="o">=</span> <span class="nx">browser_timezone</span><span class="p">;</span></div><div class='line' id='LC868'>						<span class="p">}</span></div><div class='line' id='LC869'>						<span class="nx">$</span><span class="p">.</span><span class="nx">ajax</span><span class="p">({</span></div><div class='line' id='LC870'>							<span class="nx">url</span><span class="o">:</span>      <span class="nx">buildEventsUrl</span><span class="p">(</span><span class="nx">source</span><span class="p">,</span> <span class="nx">params</span><span class="p">),</span></div><div class='line' id='LC871'>							<span class="nx">dataType</span><span class="o">:</span> <span class="s1">&#39;json&#39;</span><span class="p">,</span></div><div class='line' id='LC872'>							<span class="nx">type</span><span class="o">:</span>     <span class="s1">&#39;GET&#39;</span><span class="p">,</span></div><div class='line' id='LC873'>							<span class="nx">async</span><span class="o">:</span>    <span class="kc">false</span></div><div class='line' id='LC874'>						<span class="p">}).</span><span class="nx">done</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">json</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC875'>							<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">json</span><span class="p">.</span><span class="nx">success</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC876'>								<span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="nx">json</span><span class="p">.</span><span class="nx">error</span><span class="p">);</span></div><div class='line' id='LC877'>							<span class="p">}</span></div><div class='line' id='LC878'>							<span class="k">if</span><span class="p">(</span><span class="nx">json</span><span class="p">.</span><span class="nx">result</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC879'>								<span class="nx">events</span> <span class="o">=</span> <span class="nx">json</span><span class="p">.</span><span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC880'>							<span class="p">}</span></div><div class='line' id='LC881'>						<span class="p">});</span></div><div class='line' id='LC882'>						<span class="k">return</span> <span class="nx">events</span><span class="p">;</span></div><div class='line' id='LC883'>					<span class="p">};</span></div><div class='line' id='LC884'>				<span class="p">}</span></div><div class='line' id='LC885'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC886'>		<span class="p">}</span></div><div class='line' id='LC887'>		<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">loader</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC888'>			<span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">locale</span><span class="p">.</span><span class="nx">error_loadurl</span><span class="p">);</span></div><div class='line' id='LC889'>		<span class="p">}</span></div><div class='line' id='LC890'>		<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">onBeforeEventsLoad</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC891'>			<span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">events</span> <span class="o">=</span> <span class="nx">loader</span><span class="p">();</span></div><div class='line' id='LC892'>			<span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">events</span><span class="p">.</span><span class="nx">sort</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC893'>				<span class="kd">var</span> <span class="nx">delta</span><span class="p">;</span></div><div class='line' id='LC894'>				<span class="nx">delta</span> <span class="o">=</span> <span class="nx">a</span><span class="p">.</span><span class="nx">start</span> <span class="o">-</span> <span class="nx">b</span><span class="p">.</span><span class="nx">start</span><span class="p">;</span></div><div class='line' id='LC895'>				<span class="k">if</span><span class="p">(</span><span class="nx">delta</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC896'>					<span class="nx">delta</span> <span class="o">=</span> <span class="nx">a</span><span class="p">.</span><span class="nx">end</span> <span class="o">-</span> <span class="nx">b</span><span class="p">.</span><span class="nx">end</span><span class="p">;</span></div><div class='line' id='LC897'>				<span class="p">}</span></div><div class='line' id='LC898'>				<span class="k">return</span> <span class="nx">delta</span><span class="p">;</span></div><div class='line' id='LC899'>			<span class="p">});</span></div><div class='line' id='LC900'>			<span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">onAfterEventsLoad</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">self</span><span class="p">,</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">events</span><span class="p">);</span></div><div class='line' id='LC901'>		<span class="p">});</span></div><div class='line' id='LC902'>	<span class="p">};</span></div><div class='line' id='LC903'><br/></div><div class='line' id='LC904'>	<span class="nx">Calendar</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_templatePath</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC905'>		<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">tmpl_path</span> <span class="o">==</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC906'>			<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">tmpl_path</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span></div><div class='line' id='LC907'>		<span class="p">}</span></div><div class='line' id='LC908'>		<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC909'>			<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">tmpl_path</span> <span class="o">+</span> <span class="nx">name</span> <span class="o">+</span> <span class="s1">&#39;.html&#39;</span><span class="p">;</span></div><div class='line' id='LC910'>		<span class="p">}</span></div><div class='line' id='LC911'>	<span class="p">};</span></div><div class='line' id='LC912'><br/></div><div class='line' id='LC913'>	<span class="nx">Calendar</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_loadTemplate</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC914'>		<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">templates</span><span class="p">[</span><span class="nx">name</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC915'>			<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC916'>		<span class="p">}</span></div><div class='line' id='LC917'>		<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC918'>		<span class="nx">$</span><span class="p">.</span><span class="nx">ajax</span><span class="p">({</span></div><div class='line' id='LC919'>			<span class="nx">url</span><span class="o">:</span>      <span class="nx">self</span><span class="p">.</span><span class="nx">_templatePath</span><span class="p">(</span><span class="nx">name</span><span class="p">),</span></div><div class='line' id='LC920'>			<span class="nx">dataType</span><span class="o">:</span> <span class="s1">&#39;html&#39;</span><span class="p">,</span></div><div class='line' id='LC921'>			<span class="nx">type</span><span class="o">:</span>     <span class="s1">&#39;GET&#39;</span><span class="p">,</span></div><div class='line' id='LC922'>			<span class="nx">async</span><span class="o">:</span>    <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC923'>			<span class="nx">cache</span><span class="o">:</span>    <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">tmpl_cache</span></div><div class='line' id='LC924'>		<span class="p">}).</span><span class="nx">done</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">html</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC925'>			<span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">templates</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">template</span><span class="p">(</span><span class="nx">html</span><span class="p">);</span></div><div class='line' id='LC926'>		<span class="p">});</span></div><div class='line' id='LC927'>	<span class="p">};</span></div><div class='line' id='LC928'><br/></div><div class='line' id='LC929'>	<span class="nx">Calendar</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_update</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC930'>		<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC931'><br/></div><div class='line' id='LC932'>		<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;*[data-toggle=&quot;tooltip&quot;]&#39;</span><span class="p">).</span><span class="nx">tooltip</span><span class="p">({</span><span class="nx">container</span><span class="o">:</span> <span class="s1">&#39;body&#39;</span><span class="p">});</span></div><div class='line' id='LC933'><br/></div><div class='line' id='LC934'>		<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;*[data-cal-date]&#39;</span><span class="p">).</span><span class="nx">click</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC935'>			<span class="kd">var</span> <span class="nx">view</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;cal-view&#39;</span><span class="p">);</span></div><div class='line' id='LC936'>			<span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">day</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;cal-date&#39;</span><span class="p">);</span></div><div class='line' id='LC937'>			<span class="nx">self</span><span class="p">.</span><span class="nx">view</span><span class="p">(</span><span class="nx">view</span><span class="p">);</span></div><div class='line' id='LC938'>		<span class="p">});</span></div><div class='line' id='LC939'>		<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.cal-cell&#39;</span><span class="p">).</span><span class="nx">dblclick</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC940'>			<span class="kd">var</span> <span class="nx">view</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;[data-cal-date]&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;cal-view&#39;</span><span class="p">);</span></div><div class='line' id='LC941'>			<span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">day</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;[data-cal-date]&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;cal-date&#39;</span><span class="p">);</span></div><div class='line' id='LC942'>			<span class="nx">self</span><span class="p">.</span><span class="nx">view</span><span class="p">(</span><span class="nx">view</span><span class="p">);</span></div><div class='line' id='LC943'>		<span class="p">});</span></div><div class='line' id='LC944'><br/></div><div class='line' id='LC945'>		<span class="k">this</span><span class="p">[</span><span class="s1">&#39;_update_&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">view</span><span class="p">]();</span></div><div class='line' id='LC946'><br/></div><div class='line' id='LC947'>		<span class="k">this</span><span class="p">.</span><span class="nx">_update_modal</span><span class="p">();</span></div><div class='line' id='LC948'><br/></div><div class='line' id='LC949'>	<span class="p">};</span></div><div class='line' id='LC950'><br/></div><div class='line' id='LC951'>	<span class="nx">Calendar</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_update_modal</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC952'>		<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC953'><br/></div><div class='line' id='LC954'>		<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;a[data-event-id]&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">context</span><span class="p">).</span><span class="nx">unbind</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">);</span></div><div class='line' id='LC955'><br/></div><div class='line' id='LC956'>		<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">modal</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC957'>			<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC958'>		<span class="p">}</span></div><div class='line' id='LC959'><br/></div><div class='line' id='LC960'>		<span class="kd">var</span> <span class="nx">modal</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">modal</span><span class="p">);</span></div><div class='line' id='LC961'><br/></div><div class='line' id='LC962'>		<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">modal</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC963'>			<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC964'>		<span class="p">}</span></div><div class='line' id='LC965'><br/></div><div class='line' id='LC966'>		<span class="kd">var</span> <span class="nx">ifrm</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC967'>		<span class="k">if</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">modal_type</span> <span class="o">==</span> <span class="s2">&quot;iframe&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC968'>			<span class="nx">ifrm</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;iframe&quot;</span><span class="p">))</span></div><div class='line' id='LC969'>				<span class="p">.</span><span class="nx">attr</span><span class="p">({</span></div><div class='line' id='LC970'>					<span class="nx">width</span><span class="o">:</span>       <span class="s2">&quot;100%&quot;</span><span class="p">,</span></div><div class='line' id='LC971'>					<span class="nx">frameborder</span><span class="o">:</span> <span class="s2">&quot;0&quot;</span></div><div class='line' id='LC972'>				<span class="p">});</span></div><div class='line' id='LC973'>		<span class="p">}</span></div><div class='line' id='LC974'><br/></div><div class='line' id='LC975'><br/></div><div class='line' id='LC976'>		<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;a[data-event-id]&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">context</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC977'>			<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC978'>			<span class="nx">event</span><span class="p">.</span><span class="nx">stopPropagation</span><span class="p">();</span></div><div class='line' id='LC979'><br/></div><div class='line' id='LC980'>			<span class="kd">var</span> <span class="nx">url</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;href&#39;</span><span class="p">);</span></div><div class='line' id='LC981'>			<span class="kd">var</span> <span class="nx">id</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s2">&quot;event-id&quot;</span><span class="p">);</span></div><div class='line' id='LC982'>			<span class="kd">var</span> <span class="nx">event</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">events</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC983'>				<span class="k">return</span> <span class="nx">event</span><span class="p">.</span><span class="nx">id</span> <span class="o">==</span> <span class="nx">id</span></div><div class='line' id='LC984'>			<span class="p">});</span></div><div class='line' id='LC985'><br/></div><div class='line' id='LC986'>			<span class="k">if</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">modal_type</span> <span class="o">==</span> <span class="s2">&quot;iframe&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC987'>				<span class="nx">ifrm</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;src&#39;</span><span class="p">,</span> <span class="nx">url</span><span class="p">);</span></div><div class='line' id='LC988'>				<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.modal-body&#39;</span><span class="p">,</span> <span class="nx">modal</span><span class="p">).</span><span class="nx">html</span><span class="p">(</span><span class="nx">ifrm</span><span class="p">);</span></div><div class='line' id='LC989'>			<span class="p">}</span></div><div class='line' id='LC990'><br/></div><div class='line' id='LC991'>			<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">modal</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;handled.bootstrap-calendar&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="p">(</span><span class="nx">modal</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;handled.bootstrap-calendar&#39;</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">modal</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;handled.event-id&#39;</span><span class="p">)</span> <span class="o">!=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">id</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC992'>				<span class="nx">modal</span></div><div class='line' id='LC993'>					<span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;show.bs.modal&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC994'>						<span class="kd">var</span> <span class="nx">modal_body</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;.modal-body&#39;</span><span class="p">);</span></div><div class='line' id='LC995'>						<span class="k">switch</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">modal_type</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC996'>							<span class="k">case</span> <span class="s2">&quot;iframe&quot;</span> <span class="o">:</span></div><div class='line' id='LC997'>								<span class="kd">var</span> <span class="nx">height</span> <span class="o">=</span> <span class="nx">modal_body</span><span class="p">.</span><span class="nx">height</span><span class="p">()</span> <span class="o">-</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">modal_body</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;padding-top&#39;</span><span class="p">),</span> <span class="mi">10</span><span class="p">)</span> <span class="o">-</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">modal_body</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;padding-bottom&#39;</span><span class="p">),</span> <span class="mi">10</span><span class="p">);</span></div><div class='line' id='LC998'>								<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;iframe&#39;</span><span class="p">).</span><span class="nx">height</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">height</span><span class="p">,</span> <span class="mi">50</span><span class="p">));</span></div><div class='line' id='LC999'>								<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC1000'><br/></div><div class='line' id='LC1001'>							<span class="k">case</span> <span class="s2">&quot;ajax&quot;</span><span class="o">:</span></div><div class='line' id='LC1002'>								<span class="nx">$</span><span class="p">.</span><span class="nx">ajax</span><span class="p">({</span><span class="nx">url</span><span class="o">:</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">dataType</span><span class="o">:</span> <span class="s2">&quot;html&quot;</span><span class="p">,</span> <span class="nx">async</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">success</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1003'>									<span class="nx">modal_body</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC1004'>								<span class="p">}});</span></div><div class='line' id='LC1005'>								<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC1006'><br/></div><div class='line' id='LC1007'>							<span class="k">case</span> <span class="s2">&quot;template&quot;</span><span class="o">:</span></div><div class='line' id='LC1008'>								<span class="nx">self</span><span class="p">.</span><span class="nx">_loadTemplate</span><span class="p">(</span><span class="s2">&quot;modal&quot;</span><span class="p">);</span></div><div class='line' id='LC1009'>								<span class="c1">//	also serve calendar instance to underscore template to be able to access current language strings</span></div><div class='line' id='LC1010'>								<span class="nx">modal_body</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">templates</span><span class="p">[</span><span class="s2">&quot;modal&quot;</span><span class="p">]({</span><span class="s2">&quot;event&quot;</span><span class="o">:</span> <span class="nx">event</span><span class="p">,</span> <span class="s2">&quot;calendar&quot;</span><span class="o">:</span> <span class="nx">self</span><span class="p">}))</span></div><div class='line' id='LC1011'>								<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC1012'>						<span class="p">}</span></div><div class='line' id='LC1013'><br/></div><div class='line' id='LC1014'>						<span class="c1">//	set the title of the bootstrap modal</span></div><div class='line' id='LC1015'>						<span class="k">if</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">modal_title</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1016'>							<span class="nx">modal</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;h3&quot;</span><span class="p">).</span><span class="nx">html</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">modal_title</span><span class="p">(</span><span class="nx">event</span><span class="p">));</span></div><div class='line' id='LC1017'>						<span class="p">}</span></div><div class='line' id='LC1018'>					<span class="p">})</span></div><div class='line' id='LC1019'>					<span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;shown.bs.modal&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1020'>						<span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">onAfterModalShown</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">self</span><span class="p">,</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">events</span><span class="p">);</span></div><div class='line' id='LC1021'>					<span class="p">})</span></div><div class='line' id='LC1022'>					<span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;hidden.bs.modal&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1023'>						<span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">onAfterModalHidden</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">self</span><span class="p">,</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">events</span><span class="p">);</span></div><div class='line' id='LC1024'>					<span class="p">})</span></div><div class='line' id='LC1025'>					<span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;handled.bootstrap-calendar&#39;</span><span class="p">,</span> <span class="kc">true</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;handled.event-id&#39;</span><span class="p">,</span> <span class="nx">event</span><span class="p">.</span><span class="nx">id</span><span class="p">);</span></div><div class='line' id='LC1026'>			<span class="p">}</span></div><div class='line' id='LC1027'>			<span class="nx">modal</span><span class="p">.</span><span class="nx">modal</span><span class="p">(</span><span class="s1">&#39;show&#39;</span><span class="p">);</span></div><div class='line' id='LC1028'>		<span class="p">});</span></div><div class='line' id='LC1029'>	<span class="p">};</span></div><div class='line' id='LC1030'><br/></div><div class='line' id='LC1031'>	<span class="nx">Calendar</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_update_day</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1032'>		<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;#cal-day-panel&#39;</span><span class="p">).</span><span class="nx">height</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s1">&#39;#cal-day-panel-hour&#39;</span><span class="p">).</span><span class="nx">height</span><span class="p">());</span></div><div class='line' id='LC1033'>	<span class="p">};</span></div><div class='line' id='LC1034'><br/></div><div class='line' id='LC1035'>	<span class="nx">Calendar</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_update_week</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1036'>	<span class="p">};</span></div><div class='line' id='LC1037'><br/></div><div class='line' id='LC1038'>	<span class="nx">Calendar</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_update_year</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1039'>		<span class="k">this</span><span class="p">.</span><span class="nx">_update_month_year</span><span class="p">();</span></div><div class='line' id='LC1040'>	<span class="p">};</span></div><div class='line' id='LC1041'><br/></div><div class='line' id='LC1042'>	<span class="nx">Calendar</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_update_month</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1043'>		<span class="k">this</span><span class="p">.</span><span class="nx">_update_month_year</span><span class="p">();</span></div><div class='line' id='LC1044'><br/></div><div class='line' id='LC1045'>		<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1046'><br/></div><div class='line' id='LC1047'>		<span class="kd">var</span> <span class="nx">week</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;div&#39;</span><span class="p">)).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;id&#39;</span><span class="p">,</span> <span class="s1">&#39;cal-week-box&#39;</span><span class="p">);</span></div><div class='line' id='LC1048'>		<span class="kd">var</span> <span class="nx">start</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">getFullYear</span><span class="p">()</span> <span class="o">+</span> <span class="s1">&#39;-&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">getMonthFormatted</span><span class="p">()</span> <span class="o">+</span> <span class="s1">&#39;-&#39;</span><span class="p">;</span></div><div class='line' id='LC1049'>		<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.cal-month-box .cal-row-fluid&#39;</span><span class="p">)</span></div><div class='line' id='LC1050'>			<span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;mouseenter&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1051'>				<span class="kd">var</span> <span class="nx">p</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">start</span><span class="p">);</span></div><div class='line' id='LC1052'>				<span class="kd">var</span> <span class="nx">child</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.cal-cell1:first-child .cal-month-day&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC1053'>				<span class="kd">var</span> <span class="nx">day</span> <span class="o">=</span> <span class="p">(</span><span class="nx">child</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="s1">&#39;cal-month-first-row&#39;</span><span class="p">)</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;[data-cal-date]&#39;</span><span class="p">,</span> <span class="nx">child</span><span class="p">).</span><span class="nx">text</span><span class="p">());</span></div><div class='line' id='LC1054'>				<span class="nx">p</span><span class="p">.</span><span class="nx">setDate</span><span class="p">(</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">day</span><span class="p">));</span></div><div class='line' id='LC1055'>				<span class="nx">day</span> <span class="o">=</span> <span class="p">(</span><span class="nx">day</span> <span class="o">&lt;</span> <span class="mi">10</span> <span class="o">?</span> <span class="s1">&#39;0&#39;</span> <span class="o">+</span> <span class="nx">day</span> <span class="o">:</span> <span class="nx">day</span><span class="p">);</span></div><div class='line' id='LC1056'>				<span class="nx">week</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">locale</span><span class="p">.</span><span class="nx">week</span><span class="p">.</span><span class="nx">format</span><span class="p">(</span><span class="nx">p</span><span class="p">.</span><span class="nx">getWeek</span><span class="p">()));</span></div><div class='line' id='LC1057'>				<span class="nx">week</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;data-cal-week&#39;</span><span class="p">,</span> <span class="nx">start</span> <span class="o">+</span> <span class="nx">day</span><span class="p">).</span><span class="nx">show</span><span class="p">().</span><span class="nx">appendTo</span><span class="p">(</span><span class="nx">child</span><span class="p">);</span></div><div class='line' id='LC1058'>			<span class="p">})</span></div><div class='line' id='LC1059'>			<span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;mouseleave&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1060'>				<span class="nx">week</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span></div><div class='line' id='LC1061'>			<span class="p">})</span></div><div class='line' id='LC1062'>		<span class="p">;</span></div><div class='line' id='LC1063'><br/></div><div class='line' id='LC1064'>		<span class="nx">week</span><span class="p">.</span><span class="nx">click</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1065'>			<span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">day</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;cal-week&#39;</span><span class="p">);</span></div><div class='line' id='LC1066'>			<span class="nx">self</span><span class="p">.</span><span class="nx">view</span><span class="p">(</span><span class="s1">&#39;week&#39;</span><span class="p">);</span></div><div class='line' id='LC1067'>		<span class="p">});</span></div><div class='line' id='LC1068'><br/></div><div class='line' id='LC1069'>		<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;a.event&#39;</span><span class="p">).</span><span class="nx">mouseenter</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1070'>			<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;a[data-event-id=&quot;&#39;</span> <span class="o">+</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;event-id&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&quot;]&#39;</span><span class="p">).</span><span class="nx">closest</span><span class="p">(</span><span class="s1">&#39;.cal-cell1&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;day-highlight dh-&#39;</span> <span class="o">+</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;event-class&#39;</span><span class="p">));</span></div><div class='line' id='LC1071'>		<span class="p">});</span></div><div class='line' id='LC1072'>		<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;a.event&#39;</span><span class="p">).</span><span class="nx">mouseleave</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1073'>			<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;div.cal-cell1&#39;</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="s1">&#39;day-highlight dh-&#39;</span> <span class="o">+</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;event-class&#39;</span><span class="p">));</span></div><div class='line' id='LC1074'>		<span class="p">});</span></div><div class='line' id='LC1075'>	<span class="p">};</span></div><div class='line' id='LC1076'><br/></div><div class='line' id='LC1077'>	<span class="nx">Calendar</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_update_month_year</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1078'>		<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">views</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">view</span><span class="p">].</span><span class="nx">slide_events</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1079'>			<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC1080'>		<span class="p">}</span></div><div class='line' id='LC1081'>		<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1082'>		<span class="kd">var</span> <span class="nx">activecell</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1083'>		<span class="kd">var</span> <span class="nx">downbox</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;div&#39;</span><span class="p">)).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;id&#39;</span><span class="p">,</span> <span class="s1">&#39;cal-day-tick&#39;</span><span class="p">).</span><span class="nx">html</span><span class="p">(</span><span class="s1">&#39;&lt;i class=&quot;icon-chevron-down glyphicon glyphicon-chevron-down&quot;&gt;&lt;/i&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC1084'><br/></div><div class='line' id='LC1085'>		<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.cal-month-day, .cal-year-box .span3&#39;</span><span class="p">)</span></div><div class='line' id='LC1086'>			<span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;mouseenter&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1087'>				<span class="k">if</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.events-list&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">).</span><span class="nx">length</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC1088'>				<span class="k">if</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">children</span><span class="p">(</span><span class="s1">&#39;[data-cal-date]&#39;</span><span class="p">).</span><span class="nx">text</span><span class="p">()</span> <span class="o">==</span> <span class="nx">self</span><span class="p">.</span><span class="nx">activecell</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC1089'>				<span class="nx">downbox</span><span class="p">.</span><span class="nx">show</span><span class="p">().</span><span class="nx">appendTo</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC1090'>			<span class="p">})</span></div><div class='line' id='LC1091'>			<span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;mouseleave&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1092'>				<span class="nx">downbox</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span></div><div class='line' id='LC1093'>			<span class="p">})</span></div><div class='line' id='LC1094'>			<span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1095'>				<span class="k">if</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.events-list&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">).</span><span class="nx">length</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC1096'>				<span class="k">if</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">children</span><span class="p">(</span><span class="s1">&#39;[data-cal-date]&#39;</span><span class="p">).</span><span class="nx">text</span><span class="p">()</span> <span class="o">==</span> <span class="nx">self</span><span class="p">.</span><span class="nx">activecell</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC1097'>				<span class="nx">showEventsList</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">downbox</span><span class="p">,</span> <span class="nx">slider</span><span class="p">,</span> <span class="nx">self</span><span class="p">);</span></div><div class='line' id='LC1098'>			<span class="p">})</span></div><div class='line' id='LC1099'>		<span class="p">;</span></div><div class='line' id='LC1100'><br/></div><div class='line' id='LC1101'>		<span class="kd">var</span> <span class="nx">slider</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;div&#39;</span><span class="p">)).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;id&#39;</span><span class="p">,</span> <span class="s1">&#39;cal-slide-box&#39;</span><span class="p">);</span></div><div class='line' id='LC1102'>		<span class="nx">slider</span><span class="p">.</span><span class="nx">hide</span><span class="p">().</span><span class="nx">click</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1103'>			<span class="nx">event</span><span class="p">.</span><span class="nx">stopPropagation</span><span class="p">();</span></div><div class='line' id='LC1104'>		<span class="p">});</span></div><div class='line' id='LC1105'><br/></div><div class='line' id='LC1106'>		<span class="k">this</span><span class="p">.</span><span class="nx">_loadTemplate</span><span class="p">(</span><span class="s1">&#39;events-list&#39;</span><span class="p">);</span></div><div class='line' id='LC1107'><br/></div><div class='line' id='LC1108'>		<span class="nx">downbox</span><span class="p">.</span><span class="nx">click</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1109'>			<span class="nx">showEventsList</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span> <span class="nx">slider</span><span class="p">,</span> <span class="nx">self</span><span class="p">);</span></div><div class='line' id='LC1110'>		<span class="p">});</span></div><div class='line' id='LC1111'>	<span class="p">};</span></div><div class='line' id='LC1112'><br/></div><div class='line' id='LC1113'>	<span class="nx">Calendar</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">getEventsBetween</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">start</span><span class="p">,</span> <span class="nx">end</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1114'>		<span class="kd">var</span> <span class="nx">events</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC1115'>		<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">events</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1116'>			<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">start</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1117'>				<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1118'>			<span class="p">}</span></div><div class='line' id='LC1119'>			<span class="kd">var</span> <span class="nx">event_end</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">end</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">start</span><span class="p">;</span></div><div class='line' id='LC1120'>			<span class="k">if</span><span class="p">((</span><span class="nb">parseInt</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">start</span><span class="p">)</span> <span class="o">&lt;</span> <span class="nx">end</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">event_end</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="nx">start</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1121'>				<span class="nx">events</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC1122'>			<span class="p">}</span></div><div class='line' id='LC1123'>		<span class="p">});</span></div><div class='line' id='LC1124'>		<span class="k">return</span> <span class="nx">events</span><span class="p">;</span></div><div class='line' id='LC1125'>	<span class="p">};</span></div><div class='line' id='LC1126'><br/></div><div class='line' id='LC1127'>	<span class="kd">function</span> <span class="nx">showEventsList</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">that</span><span class="p">,</span> <span class="nx">slider</span><span class="p">,</span> <span class="nx">self</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1128'><br/></div><div class='line' id='LC1129'>		<span class="nx">event</span><span class="p">.</span><span class="nx">stopPropagation</span><span class="p">();</span></div><div class='line' id='LC1130'><br/></div><div class='line' id='LC1131'>		<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">that</span><span class="p">);</span></div><div class='line' id='LC1132'>		<span class="kd">var</span> <span class="nx">cell</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">closest</span><span class="p">(</span><span class="s1">&#39;.cal-cell&#39;</span><span class="p">);</span></div><div class='line' id='LC1133'>		<span class="kd">var</span> <span class="nx">row</span> <span class="o">=</span> <span class="nx">cell</span><span class="p">.</span><span class="nx">closest</span><span class="p">(</span><span class="s1">&#39;.cal-before-eventlist&#39;</span><span class="p">);</span></div><div class='line' id='LC1134'>		<span class="kd">var</span> <span class="nx">tick_position</span> <span class="o">=</span> <span class="nx">cell</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;cal-row&#39;</span><span class="p">);</span></div><div class='line' id='LC1135'><br/></div><div class='line' id='LC1136'>		<span class="nx">that</span><span class="p">.</span><span class="nx">fadeOut</span><span class="p">(</span><span class="s1">&#39;fast&#39;</span><span class="p">);</span></div><div class='line' id='LC1137'><br/></div><div class='line' id='LC1138'>		<span class="nx">slider</span><span class="p">.</span><span class="nx">slideUp</span><span class="p">(</span><span class="s1">&#39;fast&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1139'>			<span class="kd">var</span> <span class="nx">event_list</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.events-list&#39;</span><span class="p">,</span> <span class="nx">cell</span><span class="p">);</span></div><div class='line' id='LC1140'>			<span class="nx">slider</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">templates</span><span class="p">[</span><span class="s1">&#39;events-list&#39;</span><span class="p">]({</span></div><div class='line' id='LC1141'>				<span class="nx">cal</span><span class="o">:</span>    <span class="nx">self</span><span class="p">,</span></div><div class='line' id='LC1142'>				<span class="nx">events</span><span class="o">:</span> <span class="nx">self</span><span class="p">.</span><span class="nx">getEventsBetween</span><span class="p">(</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">event_list</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;cal-start&#39;</span><span class="p">)),</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">event_list</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;cal-end&#39;</span><span class="p">)))</span></div><div class='line' id='LC1143'>			<span class="p">}));</span></div><div class='line' id='LC1144'>			<span class="nx">row</span><span class="p">.</span><span class="nx">after</span><span class="p">(</span><span class="nx">slider</span><span class="p">);</span></div><div class='line' id='LC1145'>			<span class="nx">self</span><span class="p">.</span><span class="nx">activecell</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;[data-cal-date]&#39;</span><span class="p">,</span> <span class="nx">cell</span><span class="p">).</span><span class="nx">text</span><span class="p">();</span></div><div class='line' id='LC1146'>			<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;#cal-slide-tick&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;tick&#39;</span> <span class="o">+</span> <span class="nx">tick_position</span><span class="p">).</span><span class="nx">show</span><span class="p">();</span></div><div class='line' id='LC1147'>			<span class="nx">slider</span><span class="p">.</span><span class="nx">slideDown</span><span class="p">(</span><span class="s1">&#39;fast&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1148'>				<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;body&#39;</span><span class="p">).</span><span class="nx">one</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1149'>					<span class="nx">slider</span><span class="p">.</span><span class="nx">slideUp</span><span class="p">(</span><span class="s1">&#39;fast&#39;</span><span class="p">);</span></div><div class='line' id='LC1150'>					<span class="nx">self</span><span class="p">.</span><span class="nx">activecell</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1151'>				<span class="p">});</span></div><div class='line' id='LC1152'>			<span class="p">});</span></div><div class='line' id='LC1153'>		<span class="p">});</span></div><div class='line' id='LC1154'><br/></div><div class='line' id='LC1155'>		<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;a.event-item&#39;</span><span class="p">).</span><span class="nx">mouseenter</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1156'>			<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;a[data-event-id=&quot;&#39;</span> <span class="o">+</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;event-id&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&quot;]&#39;</span><span class="p">).</span><span class="nx">closest</span><span class="p">(</span><span class="s1">&#39;.cal-cell1&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;day-highlight dh-&#39;</span> <span class="o">+</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;event-class&#39;</span><span class="p">));</span></div><div class='line' id='LC1157'>		<span class="p">});</span></div><div class='line' id='LC1158'>		<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;a.event-item&#39;</span><span class="p">).</span><span class="nx">mouseleave</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1159'>			<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;div.cal-cell1&#39;</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="s1">&#39;day-highlight dh-&#39;</span> <span class="o">+</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;event-class&#39;</span><span class="p">));</span></div><div class='line' id='LC1160'>		<span class="p">});</span></div><div class='line' id='LC1161'><br/></div><div class='line' id='LC1162'>		<span class="c1">// Wait 400ms before updating the modal (400ms is the time for the slider to fade out and slide up)</span></div><div class='line' id='LC1163'>		<span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1164'>			<span class="nx">self</span><span class="p">.</span><span class="nx">_update_modal</span><span class="p">();</span></div><div class='line' id='LC1165'>		<span class="p">},</span> <span class="mi">400</span><span class="p">);</span></div><div class='line' id='LC1166'>	<span class="p">}</span></div><div class='line' id='LC1167'><br/></div><div class='line' id='LC1168'>	<span class="kd">function</span> <span class="nx">getEasterDate</span><span class="p">(</span><span class="nx">year</span><span class="p">,</span> <span class="nx">offsetDays</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1169'>		<span class="kd">var</span> <span class="nx">a</span> <span class="o">=</span> <span class="nx">year</span> <span class="o">%</span> <span class="mi">19</span><span class="p">;</span></div><div class='line' id='LC1170'>		<span class="kd">var</span> <span class="nx">b</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">year</span> <span class="o">/</span> <span class="mi">100</span><span class="p">);</span></div><div class='line' id='LC1171'>		<span class="kd">var</span> <span class="nx">c</span> <span class="o">=</span> <span class="nx">year</span> <span class="o">%</span> <span class="mi">100</span><span class="p">;</span></div><div class='line' id='LC1172'>		<span class="kd">var</span> <span class="nx">d</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">b</span> <span class="o">/</span> <span class="mi">4</span><span class="p">);</span></div><div class='line' id='LC1173'>		<span class="kd">var</span> <span class="nx">e</span> <span class="o">=</span> <span class="nx">b</span> <span class="o">%</span> <span class="mi">4</span><span class="p">;</span></div><div class='line' id='LC1174'>		<span class="kd">var</span> <span class="nx">f</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">((</span><span class="nx">b</span> <span class="o">+</span> <span class="mi">8</span><span class="p">)</span> <span class="o">/</span> <span class="mi">25</span><span class="p">);</span></div><div class='line' id='LC1175'>		<span class="kd">var</span> <span class="nx">g</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">((</span><span class="nx">b</span> <span class="o">-</span> <span class="nx">f</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">/</span> <span class="mi">3</span><span class="p">);</span></div><div class='line' id='LC1176'>		<span class="kd">var</span> <span class="nx">h</span> <span class="o">=</span> <span class="p">(</span><span class="mi">19</span> <span class="o">*</span> <span class="nx">a</span> <span class="o">+</span> <span class="nx">b</span> <span class="o">-</span> <span class="nx">d</span> <span class="o">-</span> <span class="nx">g</span> <span class="o">+</span> <span class="mi">15</span><span class="p">)</span> <span class="o">%</span> <span class="mi">30</span><span class="p">;</span></div><div class='line' id='LC1177'>		<span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">c</span> <span class="o">/</span> <span class="mi">4</span><span class="p">);</span></div><div class='line' id='LC1178'>		<span class="kd">var</span> <span class="nx">k</span> <span class="o">=</span> <span class="nx">c</span> <span class="o">%</span> <span class="mi">4</span><span class="p">;</span></div><div class='line' id='LC1179'>		<span class="kd">var</span> <span class="nx">l</span> <span class="o">=</span> <span class="p">(</span><span class="mi">32</span> <span class="o">+</span> <span class="mi">2</span> <span class="o">*</span> <span class="nx">e</span> <span class="o">+</span> <span class="mi">2</span> <span class="o">*</span> <span class="nx">i</span> <span class="o">-</span> <span class="nx">h</span> <span class="o">-</span> <span class="nx">k</span><span class="p">)</span> <span class="o">%</span> <span class="mi">7</span><span class="p">;</span></div><div class='line' id='LC1180'>		<span class="kd">var</span> <span class="nx">m</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">((</span><span class="nx">a</span> <span class="o">+</span> <span class="mi">11</span> <span class="o">*</span> <span class="nx">h</span> <span class="o">+</span> <span class="mi">22</span> <span class="o">*</span> <span class="nx">l</span><span class="p">)</span> <span class="o">/</span> <span class="mi">451</span><span class="p">);</span></div><div class='line' id='LC1181'>		<span class="kd">var</span> <span class="nx">n0</span> <span class="o">=</span> <span class="p">(</span><span class="nx">h</span> <span class="o">+</span> <span class="nx">l</span> <span class="o">+</span> <span class="mi">7</span> <span class="o">*</span> <span class="nx">m</span> <span class="o">+</span> <span class="mi">114</span><span class="p">)</span></div><div class='line' id='LC1182'>		<span class="kd">var</span> <span class="nx">n</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">n0</span> <span class="o">/</span> <span class="mi">31</span><span class="p">)</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC1183'>		<span class="kd">var</span> <span class="nx">p</span> <span class="o">=</span> <span class="nx">n0</span> <span class="o">%</span> <span class="mi">31</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC1184'>		<span class="k">return</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">year</span><span class="p">,</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">p</span> <span class="o">+</span> <span class="p">(</span><span class="nx">offsetDays</span> <span class="o">?</span> <span class="nx">offsetDays</span> <span class="o">:</span> <span class="mi">0</span><span class="p">),</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC1185'>	<span class="p">}</span></div><div class='line' id='LC1186'><br/></div><div class='line' id='LC1187'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">calendar</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">params</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1188'>		<span class="k">return</span> <span class="k">new</span> <span class="nx">Calendar</span><span class="p">(</span><span class="nx">params</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC1189'>	<span class="p">}</span></div><div class='line' id='LC1190'><span class="p">}(</span><span class="nx">jQuery</span><span class="p">));</span></div></pre></div></td>
         </tr>
       </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.11415s from github-fe120-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-51e3b077e56f2f3244290e430b8d05253607065b.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-f92d49cb0619e2060af322349fe2acfbc9e011fc.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

