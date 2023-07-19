# Web de Algoritmos y Programacion 3 - FIUBA - Cátedra Cano, Raik, Brasburg

<!-- TODO: Mejorar README -->

Este repo se creo usando el siguiente comando:

```
docker run --rm --volume="$PWD:/srv/jekyll" -it jekyll/jekyll:4 jekyll new . --force
```

Y se puede levantar usando:

```
docker run --name web --volume="$PWD:/srv/jekyll" -p 3000:4000 -it jekyll/jekyll:4 jekyll serve --watch --drafts
```