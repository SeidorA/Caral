import {addons} from "@storybook/manager-api";
import { create } from "@storybook/theming";


addons.setConfig({
    theme: create({
        base: "dark",
        brandImage: '/isologo_blanco.png',
        brandTitle: 'Caral',
    })
})