<%@ taglib uri="http://www.opensymphony.com/oscache" prefix="cache" %>
<%@page language="java" import="java.net.*, java.util.ArrayList, com.itgd.utils.*, com.itgd.dto.ContentListDTO, com.itgd.dto.HomePageManagerDTO, com.itgd.helper.HomePageManagerHelper, com.itgd.dto.ContentChunkDTO, com.itgd.helper.ContentChunkHelper"%>
<%@include file="global_include.jsp"%>
<cache:cache key="<%=SITE_URL+\"index.jsp\"%>" scope="application" time="0" refresh="t" >
  <!DOCTYPE html>
  <%@include file="googleanalytics.jsp"%>
  <html lang="en">
  <head>
  <meta charset="utf-8">
  <title>IndiaToday - Breaking News on Your Mobile Phone</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="css/it-wap.css">
  <link rel="stylesheet" href="css/font-awesome.min.css">
  <link rel="stylesheet" href="css/swiper.min.css">
  <script src="js/jquery-1.11.0.min.js"></script>
  <script type="text/javascript">
function canonicalUrlRedirection() {
	//if (window.innerWidth > 985) {    
		var canonicalUrl = ""; 
		var links = document.getElementsByTagName("link");
		for (var i = 0; i < links.length; i ++) {
			if (links[i].getAttribute("rel") == "canonical") {
				canonicalUrl = links[i].getAttribute("href");
				break;
			}
		}
		if (canonicalUrl != "") {
			window.location.href = canonicalUrl;
		}
	//}
}
var mobile = (/iphone|vnd.wap.xhtml+xml|sony|symbian|S60|SymbOS|nokia|samsung|mobile|windows ce|epoc|opera mini|nitro|j2me|midp-|cldc-|netfront|mot|up.browser|up.link|audiovox|blackberry|ericsson|panasonic|philips|sanyo|sharp|sie-|portalmmm|blazer|avantgo|danger|palm|series60|palmsource|pocketpc|smartphone|rover|ipaq|au-mic|alcatel|ericy|vodafone|wap1|wap2|teleca|playstation|lge|lg-|android|htc|dream|webos|bolt|nintendo|palm/i.test(navigator.userAgent.toLowerCase()));
if((navigator.userAgent.toLowerCase().indexOf("ipad")>=0)){
canonicalUrlRedirection();
}else{
if (!mobile) {             
	canonicalUrlRedirection(); 
}}
</script>
  <link rel="canonical" href="http://indiatoday.intoday.in/" />
  </head>
  <body>
  <div id="wrapper">
  <div id="header">
    <%@include file="headerHome.jsp"%>
    <!--<div id="dropdown">-->
    <!--
      </div>-->
    <div class="container">
      <div class="clearfix"></div>
      <div class="container_mn_h">
        <%@ include file="breakingnews.jsp"%>
        <!--  <div id="sports_news_wap">
        <div class="sports_news_wap">
          <div class="left_sports"> <span class="first_flag"><img src="http://media2.intoday.in/intoday/wap2015/images/aus.png" alt="Australia" title="Australia"></span> V/S <span class="second_flag"><img src="http://media2.intoday.in/intoday/wap2015/images/srilanka.png" alt="Sri Lanka" title="Sri Lanka"></span> </div>
          <div class="right_cont_sports">
            <div class="top_cnt">Only ODI - Ireland VS Australia</div>
            <div class="bottom_cnt">Thu, 27 Aug 2015 at 9:45 am GMT</div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div> -->
        <% 
      int totalContentCount=16;
      int contentCountToDisplay=5;
      String contentURL=null ;
      String commentURL=null ;
      String imageBasePath=null;
      String contentType=null;
      String externalUrlTarget=null;
      ArrayList topStory = null;
      topStory = (ArrayList) HomePageManagerHelper.homePageManagerITChunkLeft(totalContentCount, "0", 1);
      totalContentCount = topStory.size();
      HomePageManagerDTO topStories =null;
      if(totalContentCount < contentCountToDisplay)
    		contentCountToDisplay = totalContentCount;
      
    	if (topStory != null && topStory.size() > 0 ) {
    		
    			topStories = (HomePageManagerDTO) topStory.get(0);
    			contentType = "text";
    			if (topStories.getContentType() == 1) {
    				contentType = "video";
    			}
    			if (topStories.getContentType() == 2) {
    				contentType = "photo";
    			}

    			if (contentType.trim().equals("video")) {
    				contentURL = CommonFunctions.videoURL(topStories.getSefTitle(), 1, topStories.getContentId());

    				imageBasePath = Constants.KICKER_IMG_PATH;
    				
    			} else if (contentType.trim().equals("photo")) {
    				contentURL = CommonFunctions.galleryURL(topStories.getSefTitle(), 1, topStories.getContentId());
    				imageBasePath = Constants.GALLERY_IMG_PATH;
    				
    			} else {
    				contentURL = CommonFunctions.storyURL(topStories.getSefTitle(), 1, topStories.getContentId());
    				imageBasePath = Constants.KICKER_IMG_PATH;
    				
    			}
    			if (topStories.getExternalUrl().trim().length() > 10) {
    				contentURL = topStories.getExternalUrl().trim();
    				externalUrlTarget = " target='_blank'";
    			} else {
    				externalUrlTarget = "";
    			}
    			
    			
    				if(topStories.getContentType() == 0 && topStories.getTitle()!=null && !topStories.getTitle().contains("href") && topStories.getExternalUrl()!=null && topStories.getExternalUrl().trim().length() == 0 && topStories.getFulltextFlag() == 1) {
    					if(topStories.getLargeImage() != null && topStories.getLargeImage().length()>0) {
    						%>
        <div class="main_photo_cont clearfix"> <a href="<%=contentURL%>" <%=externalUrlTarget%> title="<%=topStories.getTitle() %>"> <img width="304" height="159" src="<%=imageBasePath+topStories.getLargeImage()%>" alt="<%=topStories.getKickerImageAltText().replaceAll("\"","&quot;")%>" title="<%=topStories.getKickerImageAltText().replaceAll("\"","&quot;")%>"   /></a>
          <h1><a href="<%=contentURL%>" <%=externalUrlTarget%>> <%=topStories.getTitle() %></a></h1>
        </div>
           <%
    					}
    					else {
    						%>
        <div class="main_photo_cont clearfix" ><a href="<%=contentURL%>" <%=externalUrlTarget%>> <img src="<%=NO_IMG_88x66%>"  width="100%" height="auto" alt="<%=topStories.getKickerImageAltText().replaceAll("\"","&quot;")%>" title="<%=topStories.getKickerImageAltText().replaceAll("\"","&quot;")%>" /></a>
          <h3><a href="<%=contentURL%>" <%=externalUrlTarget%>> <%=topStories.getTitle() %></a></h3>
        </div>
        <%
    					}
    				}
    			}
    	if (topStory != null && topStory.size() > 1 ){
    		
    		%>
        <div class="col-cont">
          <ul class="list-item">
            <%
    		for (int ctr = 1;  ctr < 6; ctr++) {
    			
    			if(ctr==4)
    			{
    				%>
            <!-- Ad code -->
            <div class="add_banner_cont">
              <div class="add_banner_sec"> <img src="http://media2.intoday.in/intoday/wap2015/images/add_banner.jpg" alt="Hiring boom: firms are an offering their stocks as perk to woo best and for a campus talent" title="Hiring boom: firms are an offering their stocks as perk to woo best and for a campus talent"> </div>
            </div>
            <%
    			}

    			topStories = (HomePageManagerDTO) topStory.get(ctr);
    			contentType = "text";
    			if (topStories.getContentType() == 1) {
    				contentType = "video";
    			}
    			if (topStories.getContentType() == 2) {
    				contentType = "photo";
    			}

    			if (contentType.trim().equals("video")) {
    				contentURL = CommonFunctions.videoURL(topStories.getSefTitle(), 1, topStories.getContentId());

    				imageBasePath = Constants.KICKER_IMG_PATH;
    				
    			} else if (contentType.trim().equals("photo")) {
    				contentURL = CommonFunctions.galleryURL(topStories.getSefTitle(), 1, topStories.getContentId());
    				imageBasePath = Constants.GALLERY_IMG_PATH;
    				
    			} else {
    				contentURL = CommonFunctions.storyURL(topStories.getSefTitle(), 1, topStories.getContentId());
    				imageBasePath = Constants.KICKER_IMG_PATH;
    				
    			}
    			if (topStories.getExternalUrl().trim().length() > 10) {
    				contentURL = topStories.getExternalUrl().trim();
    				externalUrlTarget = " target='_blank'";
    			} else {
    				externalUrlTarget = "";
    			}
    			

  			  if(topStories.getSmallImage() != null && topStories.getSmallImage().length()>0) {%>
            <li> <a href="<%=contentURL%>" <%=externalUrlTarget%> title="<%=topStories.getTitle() %>">
              <div class="section">
                <div class="text-section">
                  <div class="img-section"><img src="<%=imageBasePath+topStories.getSmallImage()%>" alt="<%=topStories.getKickerImageAltText().replaceAll("\"","&quot;")%>" title="<%=topStories.getKickerImageAltText().replaceAll("\"","&quot;")%>" width="88" height="66" /></a></div>
                  <a href="<%=contentURL%>" <%=externalUrlTarget%>><%=topStories.getTitle() %> </a></div>
              </div>
              </a> </li>
            <% } else {%>
            <li> <a href="<%=contentURL%>" <%=externalUrlTarget%> title="<%=topStories.getTitle() %>">
              <div class="section">
                <div class="text-section">
                  <div class="img-section"><img src="<%=NO_IMG_88x66%>"   width="88" height="66" align="left" class="img88x66"/></a></div>
                  <a href="<%=contentURL%>" <%=externalUrlTarget%>><%=topStories.getTitle() %> </a></div>
              </div>
              </a> </li>
            <% }

    		
    		}
    	}%>
            <%
      %>
          </ul>
        </div>
      </div>
      <div id="collapsible-panel">
        <div class="collapsible-pnl_cont">
          <jsp:include page="latest_stories_chunk_new.jsp" flush="true" >
          <jsp:param name="categoryTemplate" value="section" />
          <jsp:param name="categoryId" value="108" />
          <jsp:param name="contentCount" value="4" />
          <jsp:param name="storyIdToAvoid" value="0" />
          </jsp:include>
        </div>
        <div class="collapsible-pnl_cont">
          <jsp:include page="latest_stories_chunk_new.jsp" flush="true" >
          <jsp:param name="categoryTemplate" value="category" />
          <jsp:param name="categoryId" value="1075" />
          <jsp:param name="contentCount" value="3" />
          <jsp:param name="storyIdToAvoid" value="0" />
          </jsp:include>
        </div>
        <div class="add_banner_cont">
          <div class="add_banner_sec"> <img src="http://media2.intoday.in/intoday/wap2015/images/add_banner300.jpg" alt=""> </div>
        </div>
        <div class="collapsible-pnl_cont">
          <jsp:include page="latest_stories_chunk_new.jsp" flush="true" >
          <jsp:param name="categoryTemplate" value="section" />
          <jsp:param name="categoryId" value="67" />
          <jsp:param name="contentCount" value="3" />
          <jsp:param name="storyIdToAvoid" value="0" />
          </jsp:include>
        </div>
        <div class="collapsible-panel">
          <div class="collapsible-pnl_cont">
            <jsp:include page="latest_stories_chunk_new.jsp" flush="true" >
            <jsp:param name="categoryTemplate" value="section" />
            <jsp:param name="categoryId" value="175" />
            <jsp:param name="contentCount" value="3" />
            <jsp:param name="storyIdToAvoid" value="0" />
            </jsp:include>
          </div>
        </div>
        <div class="collapsible-panel">
          <div class="collapsible-pnl_cont">
            <div class="col-hd">Photos<span class="minus plus"></span></div>
            <div class="photo_cent">
              <div class="photo_slider_outer">
                <div class="photo_slider">
                  <ul>
                    <% 
					      ArrayList photo=null;
					      String[][] galleryArray = null;
					      ContentChunkDTO pdto =null;
					      photo = (ArrayList)ContentChunkHelper.latestGallery(0, 5, "0");
				
					      if (photo != null && photo.size() > 0) {
					      	galleryArray = new String[photo.size()][4];
					      	for (int ctr = 0; ctr < photo.size(); ctr++) {
					      		 pdto = (ContentChunkDTO) photo.get(ctr);
					      		galleryArray[ctr][0] = ""+pdto.getId();
					      		galleryArray[ctr][1] = pdto.getTitle();
					      		galleryArray[ctr][2] = pdto.getContentURL();
					      		galleryArray[ctr][3] = pdto.getLargeImage();
					      	}
					      }
	      				for(int ctr = 0; ctr < galleryArray.length; ctr++){
	      					%>
                    <li>
                      <div class="imgsec"><img src="<%=PHOTO_BASEPATH+galleryArray[ctr][3]%>" alt="<%=galleryArray[ctr][1] %>" title="<%=galleryArray[ctr][1] %>"/></div>
                      <div class="desc"><a href="<%=SITE_URL+galleryArray[ctr][2]%>" title="<%=galleryArray[ctr][1]%>"><%=galleryArray[ctr][1]%> </a></div>
                    </li>
                    <%
	      				}
	      			%>
                  </ul>
                </div>
                <div class="autoslider-nav"> <a href="javascript:void(0);" class="active" id="_1"></a> <a href="javascript:void(0);" id="_2"></a> <a href="javascript:void(0);" id="_3"></a> <a href="javascript:void(0);" id="_4"></a> </div>
              </div>
            </div>
            <div class="col-cont"> <span class="see-more"><a href="galleries" title="see more"> See More </a></span> </div>
          </div>
        </div>
        <div class="collapsible-panel">
          <div class="collapsible-pnl_cont">
            <div class="col-hd"><a href="videos" title="videos">Video</a><span class="minus plus"></span></div>
            <div class="photo_cent">
              <div class="photo_slider_outer">
                <div class="video_slider">
                  <%@include file="home_video_chunk.jsp"%>
                </div>
                <div class="autoslider-nav-video"> <a href="javascript:void(0);" class="active" id="_01"></a> <a href="javascript:void(0);" id="_02"></a> <a href="javascript:void(0);" id="_03"></a> <a href="javascript:void(0);" id="_04"></a> </div>
              </div>
            </div>
          </div>
        </div>
        <div class="add_banner_cont">
          <div class="add_banner_sec"> <img src="http://media2.intoday.in/intoday/wap2015/images/add_banner.jpg" alt="Ad"> </div>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="clearfix"></div>
    <%@ include file="footer_new_2015.jsp" %>
  </div>
  <script src="http://media2.intoday.in/intoday/touchcarousel.js" type="text/javascript"></script>
  <script src="js/swiper.min.js"></script>
  <script src="js/common-home.js"></script>
  </body>
  </html>
</cache:cache>
