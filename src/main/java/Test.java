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

import com.google.common.hash.HashCode;
import com.google.common.hash.Hashing;

import java.nio.charset.Charset;
import java.util.Objects;

public class Test {
    public static void main(String[] args) {
        final HashCode blub = Hashing.sha256().hashString("blub", Charset.forName("UTF-8"));
        final HashCode blub2 = Hashing.sha1().hashString("blub", Charset.forName("UTF-8"));
        final HashCode blub3 = Hashing.sha384().hashString("blub", Charset.forName("UTF-8"));
        final HashCode blub1 = Hashing.sha512().hashString("blub", Charset.forName("UTF-8"));
        assert Objects.equals("8dc140e6fe831481a2005ae152ffe32a9974aa92a260dfbac780d6a87154bb0b", blub.toString());
        assert Objects.equals("e85b5191a9cd4dc4c635c34fc3df63e55badab4ceb2c378bed4ac2aa81786f7135b3f85f1d8e952a202a2d39dd71ca507844c583bac548fbad666ba1ce0dac30", blub1.toString());
        System.out.println("blub-: " + blub);
        System.out.println("blub1-: " + blub1);
        System.out.println("blub2-: " + blub2);
        System.out.println("blub3-: " + blub3);
    }
}
