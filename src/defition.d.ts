declare module '@storybook/react/demo' {
    export class Button extends React.Component<React.HTMLProps<Button>> {
    }
  
    export interface WelcomeProps {
      showApp: React.MouseEventHandler<Welcome>;
    }
  
    export class Welcome extends React.Component<WelcomeProps> {
    }
  }

  declare module 'jss-preset-default' {

    export type JSSPresetOptions = {
        extend?: any;
        nested?: any;
        camelCase?: any;
        defaultUnit?: any;
        vendorPrefixer?: any;
        propsSort?: any;
        compose?: any;
    };
    
    declare const preset: (opts?: JSSPresetOptions) => JSS.SetupOptions;
    
    export default preset;
  }