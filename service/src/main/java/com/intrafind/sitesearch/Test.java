/*
 * Copyright 2018 IntraFind Software AG. All rights reserved.
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

package com.intrafind.sitesearch;

import org.apache.tika.metadata.Metadata;
import org.apache.tika.parser.ParseContext;
import org.apache.tika.parser.pdf.PDFParser;
import org.apache.tika.sax.BodyContentHandler;

import java.io.InputStream;
import java.net.URL;

public class Test {
    public static void main(final String... args) throws Exception {
        final BodyContentHandler bodyContentHandler = new BodyContentHandler();
        final Metadata metadata = new Metadata();
//        final URL url = new URL("http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf");
        final URL url = new URL("http://www.africau.edu/images/default/sample.pdf");
//        final URL url = new URL("http://www.pdf995.com/samples/pdf.pdf");

        final InputStream urlStream = url.openStream();
        final ParseContext parseContext = new ParseContext();

        final PDFParser pdfParser = new PDFParser();
        pdfParser.parse(urlStream, bodyContentHandler, metadata, parseContext);
        System.out.println("=== content ===" + bodyContentHandler.toString());

        System.out.println("=== metadata ===");
        final String[] metadataNames = metadata.names();

        for (final String name : metadataNames) {
            System.out.println(name + " : " + metadata.get(name));
        }
    }
}
