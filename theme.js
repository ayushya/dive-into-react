import { default as theme} from 'mdx-deck/themes';
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'

export default {
  ...theme,
  prism: {
    style: okaidia
  }
  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md

}
