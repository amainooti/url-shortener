# URL shortener

---

**_URL shortener_** - Url shortener allows you to quickly and efficiently shorten long URLs, making them easier to share and manage. With this service, you can

### TODO's

- [x] POST long url and store it
- [x] GET short url and redirect to long url
- [ ] Add caching i.e Redis
- [ ] Add a reverse proxy that can handle load balance i.e nginx

### Route

Home

```code
localhost3000

```

HTTP POST

STATUS CODE 201

Body: Long URL

```code
localhost:3000/shorten
```

RESPONSE: short URL

HTTP GET

STATUS CODE 301

```code
localhost:3000/:shortUrl
```

### Paths

| GET                | POST              |
| ------------------ | ----------------- |
| :short             | shorten           |
| returns stored Url | creates short url |

### Credit

This project was inspired by roadmap sh see below for more info
[Roadmapsh](https://roadmap.sh/projects/url-shortening-service)
