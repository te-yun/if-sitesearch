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

package com.intrafind.sitesearch.service;

import com.caucho.hessian.client.HessianProxyFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.Authenticator;
import java.net.MalformedURLException;
import java.net.PasswordAuthentication;
import java.net.URL;

/**
 * This class is a helper class for the instantiation of IntraFind's core services.
 * TODO consider trying JSON endpoint
 */
public enum IfinderCoreClient {
    ;
    private static final Logger LOG = LoggerFactory.getLogger(IfinderCoreClient.class);
    private final static HessianProxyFactory hessianProxyFactory;

    static {
        System.getProperties().put("http.maxConnections", "128"); // it might be necessary to change this during JVM startup!

        hessianProxyFactory = new HessianProxyFactory();
        hessianProxyFactory.setHessian2Reply(true);
        hessianProxyFactory.setHessian2Request(true);

        initUrlAuthentication();
    }

    /**
     * Returns a Hessian web client.
     * <p/>
     * Example URL: <code>http://server:8090/hessian/serviceID</code>
     * <p/>
     * If you need to add basic authentication: <code>http://username:password@server:8090/hessian/serviceID</code>
     */
    @SuppressWarnings("unchecked")
    public static <T> T newHessianClient(final Class<T> anInterface, final String url) {
        try {
            return (T) hessianProxyFactory.create(anInterface, url);
        } catch (final MalformedURLException exception) {
            LOG.error("HESSIAN_CLIENT_ERROR: " + exception.getMessage());
            throw new RuntimeException(exception);
        }
    }

    private static void initUrlAuthentication() {
        Authenticator.setDefault(new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return getAuthentication(getRequestingURL());
            }
        });
    }

    private static PasswordAuthentication getAuthentication(final URL url) {
        final String userInfo = url.getUserInfo();
        if (userInfo == null) return null;

        final int index = userInfo.indexOf(':');
        if (index == -1) return null;

        final String user = userInfo.substring(0, index);
        final String pass = userInfo.substring(index + 1);

        return new PasswordAuthentication(user, pass.toCharArray());
    }
}