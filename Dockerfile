# FJ Creative Hub - Statik Site (Nginx tabanlı)
FROM nginx:1.27-alpine

# Varsayılan nginx yapılandırmasını kaldır, kendi config'imizi koy
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Site dosyalarını kopyala
COPY site/ /usr/share/nginx/html/

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget -q --spider http://127.0.0.1/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
