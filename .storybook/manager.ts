import {addons} from "@storybook/manager-api";
import { create } from "@storybook/theming";


addons.setConfig({
    theme: create({
        base: "dark",
        brandUrl: 'https://google.com',
        brandImage: '/isologo_blanco.png',
        brandTitle: 'Caral',
        brandTarget: '_self'
    })
})