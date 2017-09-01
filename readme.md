# VK Cover Wrapper

Easy way to upload and save cover to your community.

## Install

```sh
$ npm i vk-cover-wrapper
```

## Usage

```javascript
const { uploadAndSaveCoverPhoto } = require('vk-cover-wrapper')

uploadAndSaveCoverPhoto(12345678, 'AvgY7aDV00hH7aVGSDJUFI1', './cover.jpg')
  .then((body) => {
    console.log(body)
    // {
    //   response: {
    //     images: [ [Object], [Object], [Object], [Object], [Object] ]
    //   }
    // }
  })
```

## Docs

### .uploadAndSaveCoverPhoto(groupId, groupToken, coverPath)

| Parameter  | Type                | Requried  |
| -----------|:-------------------:| ---------:|
| groupId    | number or string    | yes       |
| groupToken | string              | yes       |
| coverPath  | string              | yes       |

...

## License

MIT.
