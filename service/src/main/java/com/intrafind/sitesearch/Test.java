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

import java.net.URL;

public class Test {
    public static void main(final String... args) throws Exception {
        final var bodyContentHandler = new BodyContentHandler();
        final var metadata = new Metadata();
        final var url = new URL("http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf");
//        final var url = new URL("http://www.africau.edu/images/default/sample.pdf");
//        final var url = new URL("http://www.pdf995.com/samples/pdf.pdf");

        final var urlStream = url.openStream();
        final var parseContext = new ParseContext();

        final var pdfParser = new PDFParser();
        pdfParser.parse(urlStream, bodyContentHandler, metadata, parseContext);
        System.out.println("=== content ===" + bodyContentHandler.toString());

        System.out.println("=== metadata ===");
        final var metadataNames = metadata.names();
        for (final var name : metadataNames) {
            System.out.println(name + " : " + metadata.get(name));
        }
        System.out.println("metadata.get(title): " + metadata.get("title"));
        System.out.println("metadata.get(pdf:docinfo:title): " + metadata.get("pdf:docinfo:title"));
        System.out.println("metadata.get(dc:title): " + metadata.get("dc:title"));
    }
}
