package net.loxal.quizzer.dto;

public class Result {
    private String favor;
    private String favored;
    private String score;
    private String thumbnail;
    private String title = "Any title...";
    private String type;
    private String url;
    private String urlbase64;

    public Result(String text) {
        this.text = text;
    }

    public Result() {
    }

    public String getFavor() {
        return favor;
    }

    public void setFavor(String favor) {
        this.favor = favor;
    }

    public String getFavored() {
        return favored;
    }

    public void setFavored(String favored) {
        this.favored = favored;
    }

    public String getScore() {
        return score;
    }

    public void setScore(String score) {
        this.score = score;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getUrlbase64() {
        return urlbase64;
    }

    public void setUrlbase64(String urlbase64) {
        this.urlbase64 = urlbase64;
    }

    private String text = "Any text...";

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
