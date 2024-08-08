# Web de Paradigmas de programación - FIUBA - Cátedra Brasburg, Raik

La página esta alojada en `www.paradigmas.ar`
Este repo se creo usando el siguiente comando:

```
docker run --rm --volume="$PWD:/srv/jekyll" -it jekyll/jekyll:3 jekyll new . --force
```

Para correrlo local es necesario, modificar el `_config.yml` comentando el `remote_theme`  y descomentando el `theme`:

```
theme                  : "minimal-mistakes-jekyll"
# remote_theme           : "mmistakes/minimal-mistakes"
```

Y luego levantando la página usando Jekyll con Docker:

```
docker run --name web --volume="$PWD:/srv/jekyll" -p 3000:4000 -it jekyll/jekyll:3 jekyll serve --watch --drafts
```
