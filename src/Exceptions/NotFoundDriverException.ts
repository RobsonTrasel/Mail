/**
 * @athenna/mail
 *
 * (c) Victor Tesoura Júnior <txsoura@athenna.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Exception } from '@athenna/common'
import { DriverFactory } from '#src/Factories/DriverFactory'

export class NotFoundDriverException extends Exception {
  public constructor(driverName: string) {
    const message = `The driver ${driverName} has not been found.`
    const availableDrivers = DriverFactory.availableDrivers().join(', ')

    super({
      message,
      status: 500,
      code: 'E_NOT_FOUND_ERROR',
      help: `Available drivers are: ${availableDrivers}. Look into your config/mail file if ${driverName} driver is implemented by mail. Or create ${driverName} driver implementation using DriverFactory.createDriver("${driverName}", ...) method.`,
    })
  }
}
