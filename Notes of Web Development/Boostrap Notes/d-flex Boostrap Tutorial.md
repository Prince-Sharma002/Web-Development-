# d-flex Boostrap Tutorial


### Without using flex
```
    <div class="parent container">

      <div>

        <h3 class="bondary"> this heading is block element </h1>
        <p class="bondary"> this paragraph is block element</p>
        <div class="bondary">
          this div is block element
        </div>

      </div>

    </div>
```


### With using d-flex
```
    <div class="parent container">

      <div class="d-flex">

        <h3 class="bondary"> this heading is block element </h1>
        <p class="bondary"> this paragraph is block element</p>
        <div class="bondary">
          this div is block element
        </div>

      </div>

    </div>
```
NOTE : Using d-flex you can see block element are positioned inline

DO : Change windows size to mobile size of browser and see the result.
DO : You can style border on elements to have a better look 

NOTE : By default d-flex set to mobile means it will flex even at mobile size.

### Stop flex at mobile view

```
    <div class="parent container">

      <div class="d-lg-flex">

        <h3 class="bondary"> this heading is block element </h1>
        <p class="bondary"> this paragraph is block element</p>
        <div class="bondary">
          this div is block element
        </div>

      </div>

    </div>
```
NOTE : d-lg-flex means apply flex in large windows size

NOTE : d-flex is only apply on its immediate child only

DO : Create div and apply d-flex and add one div child and one header child inside flex div
     then inside child div add some block elements and then see the result.




