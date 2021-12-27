# def avg_function(test1=55, test2=90, test3=75)

#     average = (test1 + test2 + test3)/3

#     return puts average

# end

#  avg_function(40)

# def removeDuplicate(nums)
#   return 0 if(nums.size == 0)
  
#   i = 0
#   j = 1
#   while j < nums.size
#     if(nums[i] != nums[j])
#         i += 1
#         nums[i] = nums[j]
#         j += 1
#     else
#         j += 1
#     end
#   end
#    i+1
# end

# input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

# p removeDuplicate(input)

# first_name = "Eric"
# last_name = "Enaburekhan"

# puts "#{first_name} #{last_name}"

# p "many words".chars

# "many words".each_char { |ch| puts ch }
# p "ascii".chars.map(&:ord)

# str = "my cat is black"
# str.freeze
# str[0] = ""

# p str

users = %w(john mary luke)

# users.each {|item| puts item }

# users.map { |item| puts item.capitalize }
# puts
# users.map { |item| puts item.downcase }

# p [[1, 2, 3], [4, 5, 6]].flat_map { |val| val.inject(:+) }

# numbers = [3, 7, 12, 2, 49]
# p numbers.select {|n| n > 10 }

list = [1,1,2,2,2,3,3,3,3,4,4,4]
# p list.uniq

# p list.sample
# p list.take(3)
# p list.slice(0, 3)
# p list.slice(0...3)

# splat = *[1,2],3
# p splat

# a = [2,3,4]
# b = [2,4,5]
# p a & b
# p a | b

# h = {water: 300, oil: 100}

#  h.each { |key, value| p "The key is #{key} with value #{value}" }   

#  p h.keys
#  p h.values

# str = "aabbbaa"

# count = {}
# str.each_char do |c|
#   if count.key?(c) 
#     count[c] += 1
#   else
#     count[c] = 1
#   end
# end

# puts count

# p (2..15).step(2).to_a

# ages = [2, 5, 10, 15]
# p ages.class
# p 5.class
# p Array.class
# p String.class
# p Class.class
# p Array.ancestors

# def print_twice
#   yield 1
#   yield 2
#   yield 3  
# end

# print_twice { |num| puts num*10 }

# say_something = -> { puts "this is lambda" }

# say_something.call

# times_two = -> (x){ x * 2 }

# p times_two.call(10)

# def call_proc(my_proc)
#   count = 500
#   my_proc.call
# end
# count = 1
# my_proc = Proc.new { puts count }
# p call_proc(my_proc)

# p ['cat', 'dog'].map(&:upcase)