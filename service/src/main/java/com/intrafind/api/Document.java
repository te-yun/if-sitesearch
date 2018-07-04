/*
 * Copyright 2018 IntraFind Software AG. All rights reserved.
 */

package com.intrafind.api;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

public final class Document implements Serializable {
    private final String id;
    private final Map<String, List<String>> fields = new TreeMap<>();

    protected Document() {
        this.id = null;
    }

    public Document(final String id) {
        if (id == null) {
            throw new IllegalArgumentException("Document ID cannot be null.");
        } else {
            this.id = id;
        }
    }

    public String getId() {
        return this.id;
    }

    public Map<String, List<String>> getFields() {
        return this.fields;
    }

    public String get(final String key) {
        final var values = this.getAll(key);
        return values != null && !values.isEmpty() ? values.get(0) : null;
    }

    public List<String> getAll(final String key) {
        return this.getFields().get(key);
    }

    public Document set(final String key, final Object... values) {
        this.del(key);
        return this.add(key, values);
    }

    public Document set(String key, Iterable<?> values) {
        this.del(key);
        return this.add(key, values);
    }

    public Document add(final String key, final Object... values) {
        if (values != null) {
            for (final var value : values) {
                if (value != null) {
                    final var string = value.toString().trim();
                    if (!string.isEmpty()) {
                        final var field = this.getFields().computeIfAbsent(key, k -> new ArrayList<>());
                        field.add(string);
                    }
                }
            }
        }

        return this;
    }

    public Document add(final String key, final Iterable<?> values) {
        if (values != null) {
            for (final var value : values) {
                this.add(key, value);
            }
        }

        return this;
    }

    public Document del(final String key) {
        this.getFields().remove(key);
        return this;
    }

    @Override
    public int hashCode() {
        return this.getId().hashCode();
    }

    @Override
    public String toString() {
        return this.getId() + ":" + this.getFields();
    }
}