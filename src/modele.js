import image from './assets/fire-circle-37615116.jpeg'
import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock} from "./classes/blocks";

export const model = [
    new TitleBlock('Header of site' ,{
        tag: 'h2',
        styles: {
            background: 'azure',
            'text-align': 'center',
            padding: '1.5rem',
            color: 'black'

        }
    }),
    new TextBlock('Text part of custom site. It,s can bee now anything block of text', {
        tag: 'p',
        styles: {
            padding: '1rem',
            color: 'black',
            'text-align': 'center',

        }
    }),
    new ColumnsBlock(
        [
            'Text for first column',
            'Text for second column',
            'Text for third column'
        ],
        {
            styles: {
                'text-align': 'center',
                padding: '0.5rem',
                color: 'black'

            }
        }),
    new ImageBlock( image, {
        styles: {
            'max-width': '500px',
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        }
    }),
]