import { SnotifyService, SnotifyPosition, SnotifyToastConfig } from 'ng-snotify';

export class NotificationManager {

    private timeout = 4000;
    private position: SnotifyPosition = SnotifyPosition.leftBottom;
    private progressBar = false;
    private closeClick = true;
    private newTop = true;
    private backdrop = -1;
    private dockMax = 8;
    private blockMax = 6;
    private pauseHover = true;
    private titleMaxLength = 15;
    private bodyMaxLength = 80;
    finalMessage: string;
    arrayafter: Array<string>;

    constructor(private snotifyService: SnotifyService) { }
    /*
        Change global configuration
    */
    private getConfig(): SnotifyToastConfig {
        this.snotifyService.setDefaults({
            global: {
                newOnTop: this.newTop,
                maxAtPosition: this.blockMax,
                maxOnScreen: this.dockMax
            }
        });
        return {
            bodyMaxLength: this.bodyMaxLength,
            titleMaxLength: this.titleMaxLength,
            backdrop: this.backdrop,
            position: this.position,
            timeout: this.timeout,
            showProgressBar: this.progressBar,
            closeOnClick: this.closeClick,
            pauseOnHover: this.pauseHover
        };
    }

    showErrorMessage(message: string) {
        this.onClear();
        const errorHtml = '<div class=\'snotifyToast__body\' style=\'display: flex ;flex-direction : row\'>' +
            '<img src=\'assets/img/error-icon.png\'>' +
            // '<span class=\'snotify-circle-error-style\'>' +
            // '</span>' +
            '<div class=\'snotify-test-style\'' +
            `>${message}` +
            '</div>' +
            '</div> ';
        this.onHtml(errorHtml);
    }

    showSuccessMessage(message: string) {
        this.onClear();
        const successHtml = '<div class=\'snotifyToast__body\' style=\'display: flex ;flex-direction : row\'>' +
            '<span class=\'snotify-circle-succes-style\'>' +
            '</span>' +
            '<div class=\'snotify-test-style\'' +
            `>${message} </div>` +
            '</div> ';
        this.onHtml(successHtml);
    }

    onHtml(htmlCode: string) {
        this.snotifyService.html(htmlCode, this.getConfig());
    }

    onClear() {
        this.snotifyService.clear();
    }

}
