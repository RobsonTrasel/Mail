/**
 * @athenna/mail
 *
 * (c) Victor Tesoura Júnior <txsoura@athenna.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Config } from '@athenna/config'
import { Exception, Path } from '@athenna/common'

export class NotImplementedConfigException extends Exception {
  public constructor(mailerName: string) {
    const message = `Mailer ${mailerName} is not configured inside mail.mailers object from config/mail file.`

    let help = ''

    if (Config.get('mail.mailers')) {
      const availableConfigs = Object.keys(Config.get('mail.mailers')).join(
        ', ',
      )

      help += `Available mailers are: ${availableConfigs}.`
    } else {
      help += `The "Config.get('mail.mailers') is empty, maybe your configuration files are not loaded?`
    }

    help += ` Create your configuration inside mailers object to use it. Or load your configuration files using "Config.safeLoad(Path.config('mail.${Path.ext()}'))`

    super({
      message,
      status: 500,
      code: 'E_NOT_IMPLEMENTED_CONFIG_ERROR',
      help,
    })
  }
}
