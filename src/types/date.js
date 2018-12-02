import dateIsAfter from 'date-fns/is_after';
import dateIsBefore from 'date-fns/is_before';
import dateIsEqual from 'date-fns/is_equal';
import dateIsFirstDayOfMonth from 'date-fns/is_first_day_of_month';
import dateIsFriday from 'date-fns/is_friday';
import dateIsLastDayOfMonth from 'date-fns/is_last_day_of_month';
import dateIsLeapYear from 'date-fns/is_leap_year';
import dateIsMonday from 'date-fns/is_monday';
import dateIsSameDay from 'date-fns/is_same_day';
import dateIsSameHour from 'date-fns/is_same_hour';
import dateIsSameISOWeek from 'date-fns/is_same_iso_week';
import dateIsSameISOYear from 'date-fns/is_same_iso_year';
import dateIsSameMinute from 'date-fns/is_same_minute';
import dateIsSameMonth from 'date-fns/is_same_month';
import dateIsSameQuarter from 'date-fns/is_same_quarter';
import dateIsSameSecond from 'date-fns/is_same_second';
import dateIsSameWeek from 'date-fns/is_same_week';
import dateIsSameYear from 'date-fns/is_same_year';
import dateIsSaturday from 'date-fns/is_saturday';
import dateIsSunday from 'date-fns/is_sunday';
import dateIsThursday from 'date-fns/is_thursday';
import dateIsTuesday from 'date-fns/is_tuesday';
import dateIsValid from 'date-fns/is_valid';
import dateIsWednesday from 'date-fns/is_wednesday';
import dateIsWeekend from 'date-fns/is_weekend';
import dateIsWithinRange from 'date-fns/is_within_range';
import ValidatorStack from '../ValidatorStack';
import validators from '../validators';
import createValidators from '../createValidators';

export default (...args) =>
  new ValidatorStack('date', [validators.isDate(...args)]).extend({
    ...createValidators({
      isAfter: dateIsAfter,
      isBefore: dateIsBefore,
      isEqual: dateIsEqual,
      isFirstDayOfMonth: dateIsFirstDayOfMonth,
      isFriday: dateIsFriday,
      isLastDayOfMonth: dateIsLastDayOfMonth,
      isLeapYear: dateIsLeapYear,
      isMonday: dateIsMonday,
      isSameDay: dateIsSameDay,
      isSameHour: dateIsSameHour,
      isSameISOWeek: dateIsSameISOWeek,
      isSameISOYear: dateIsSameISOYear,
      isSameMinute: dateIsSameMinute,
      isSameMonth: dateIsSameMonth,
      isSameQuarter: dateIsSameQuarter,
      isSameSecond: dateIsSameSecond,
      isSameWeek: dateIsSameWeek,
      isSameYear: dateIsSameYear,
      isSaturday: dateIsSaturday,
      isSunday: dateIsSunday,
      isThursday: dateIsThursday,
      isTuesday: dateIsTuesday,
      isWednesday: dateIsWednesday,
      isWeekend: dateIsWeekend,
      isWithinRange: dateIsWithinRange,
      isValidDate: dateIsValid,
    }),
    isValid: validators.isValid,
    isOneOf: validators.isOneOf,
  });
