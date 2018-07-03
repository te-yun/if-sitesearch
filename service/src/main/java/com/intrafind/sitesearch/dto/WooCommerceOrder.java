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

package com.intrafind.sitesearch.dto;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class WooCommerceOrder {
    private String siteId;
    private String paymentMethod;
    private List<LineItem> lineItems;
    private String affiliate;

    @JsonCreator
    public WooCommerceOrder(
            @JsonProperty("customer_note") String siteId,
            @JsonProperty("payment_method") String paymentMethod,
            @JsonProperty("line_items") List<LineItem> lineItems,
            @JsonProperty("order_key") String affiliate
    ) {
        this.siteId = siteId;
        this.paymentMethod = paymentMethod;
        this.lineItems = lineItems;
        this.affiliate = affiliate;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public List<LineItem> getLineItems() {
        return lineItems;
    }

    public String getSiteId() {
        return siteId;
    }

    public String getAffiliate() {
        return affiliate;
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class LineItem {
        private String sku;

        @JsonCreator
        public LineItem(@JsonProperty("sku") String sku) {
            this.sku = sku;
        }

        public String getSku() {
            return sku;
        }
    }
}
