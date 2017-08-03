/*
 * Copyright 2017 IntraFind Software AG. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package de.intrafind.sitesearch.controller;

import com.rometools.rome.feed.synd.SyndFeed;
import com.rometools.rome.io.SyndFeedInput;
import com.rometools.rome.io.XmlReader;

import java.net.URL;

public class RssImporter {
    public static void main(String[] args) {
//        String url = "http://stackoverflow.com/feeds/tag?tagnames=rome";
        String url = "https://intrafind.de/share/enterprise-search-blog.xml";
        try {
            URL feedUrl = new URL(url);

//        SyndFeed feed = null;
//        try {
//            SyndFeedInput input = new SyndFeedInput();
            SyndFeed feed = new SyndFeedInput().build(new XmlReader(feedUrl));
//            SyndFeed feed = new SyndFeedInput().build(new XmlReader(new File("./stackoverflow-feed.xml")));
//            SyndFeed feed = new SyndFeedInput().build(new XmlReader(new File("./stackoverflow-feed.xml")));
//            feed = new SyndFeedInput().build(new WebRowSetXmlReader(new URL(url)));
//            System.out.println(feed.getAuthor());
//            System.out.println(feed.getDocs());
//            System.out.println(feed.getContributors());
            System.out.println(feed.getEntries());
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//        System.out.println(feed.getTitle());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
