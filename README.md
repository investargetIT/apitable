直接使用原始镜像 `apitable/backend-server` 会有很多限制。它们主要集中在 `DefaultSubscriptionFeature.java` 这个文件中，通过修改代码，自己构建镜像可以去除这些限制。
# 构建 backend-server 镜像
```
docker -t movier/apitable-backend-server -f ./packaging/Dockerfile.backend-server .
```
# 推送镜像
```
docker push movier/apitable-backend-server
```
# 生产环境
```
docker pull movier/apitable-backend-server
docker compose down
docker compose up -d
```
