# Array of products
# O(n^2) time | O(n) space
# def array_of_products(array)
#     products = [];
#   (0..(array.size - 1)).each do |i|
#     running_product = 1
#     (0..(array.size - 1)).each do |j|
#         if i != j
#           running_product *= array[j]    
#         end
#         products[i] = running_product
#     end
#   end
#    products   
# end

# array = [5, 1, 4, 2]

# p array_of_products(array) # [8, 40, 10, 20]

# O(n) time | O(n) space
# def array_of_products(array)
#   products = Array.new(array.size).fill(1)
#   left_products = Array.new(array.size).fill(1)
#   right_products = Array.new(array.size).fill(1)
  
#   left_running_product = 1
#   (0..(array.size - 1)).each do |i|
#     left_products[i] = left_running_product
#     left_running_product *= array[i]
#   end

#   right_running_product = 1
#   (0..(array.size - 1)).reverse_each do |i|
#     right_products[i] = right_running_product
#     right_running_product *= array[i]
#   end

#   (0..(array.size - 1)).each do |i|
#     products[i] = left_products[i] * right_products[i]
#   end
#   return products
# end

# array = [5, 1, 4, 2]

# p array_of_products(array) # [8, 40, 10, 20]

# O(n) time | O(n) space
# def array_of_products(array)
#   products = Array.new(array.size).fill(1) 
  
#   left_running_product = 1
#   (0..(array.size - 1)).each do |i|
#     products[i] = left_running_product
#     left_running_product *= array[i]
#   end

#   right_running_product = 1
#   (0..(array.size - 1)).reverse_each do |i|
#      products[i] *= right_running_product
#      right_running_product *= array[i]
#   end
#    products
# end

# array = [5, 1, 4, 2]

# p array_of_products(array) # [8, 40, 10, 20]



# def merged_over_lapping_intervals(array)
#   sorted_array = array.sort() 
#   current_interval = sorted_array[0]
#   merge_interval = []
#   merge_interval << current_interval 

#   sorted_array.each do |next_interval|
#     _, current_interval_end = current_interval
#     next_interval_start, next_interval_end = next_interval
#     if current_interval_end >= next_interval_start
#       current_interval[1] = [current_interval_end, next_interval_end].max
#     else
#       current_interval = next_interval
#       merge_interval << current_interval      
#     end
#   end
#    merge_interval
# end

# interval = [[1,2], [3,5], [4,7], [6,8], [9,10]]

# p merged_over_lapping_intervals(interval) #[[1,2], [3,8], [9,10]]

# def four_number_sum(array, target_sum)
#  all_pairs_sum = {}
#  quadruplets = []
#    (1...(array.size - 1)).each do |i|
#       ((i+1)..(array.size - 1)).each do |j|
#          current_sum = array[i] + array[j]
#          diff = target_sum - current_sum
#          if all_pairs_sum.include?(diff)
#             all_pairs_sum[diff].each do |pairs|
#                 p all_pairs_sum[diff]
#                 quadruplets << pairs.concat([array[i], array[j]])
#             end
#          end    
#       end
#       (0...i).each do |k|
#           current_sum = array[k] + array[i]
#           if !all_pairs_sum.include?(current_sum)
#             all_pairs_sum[current_sum] = [[array[k], array[i]]]
#           else
#               all_pairs_sum[current_sum] << [[array[k], array[i]]]
#           end
#       end
#    end
#     quadruplets     
# end

# array = [7, 6, 4, -1, 1, 2]
# target_sum = 16

# p four_number_sum(array, target_sum); #[[7, 6, 4, -1], [7, 6, 1, 2]]

# def min_rewards(scores)
#   rewards = Array.new(scores.size).fill(1)
#   (0..(scores.size - 1)).each do |i|
#     if scores[i] > scores[i-1]
#         rewards[i] = rewards[i-1] + 1
#     end
#   end

#   (0...(scores.size - 1)).reverse_each do |i|
#     if scores[i] > scores[i+1]
#       rewards[i] = (rewards[i], (rewards[i+1] + 1)).max()
#     end
#   end
#    rewards 
# end

# scores = [8, 4, 2, 1, 3, 6, 7, 9, 5]   
# p min_rewards(scores);   # 25 [4, 3, 2, 1, 2, 3, 4, 5, 1]

# def zigzag_traverse(array)
#   height = array.size - 1
#   width = array[0].size - 1
#   row = 0
#   col = 0
#   going_down = true
#   result = []

#   while !is_out_of_bounds(row, col, height, width)
#     result << array[row][col]
#    if going_down
#     if col == 0 or row == height
#       going_down = false
#       if row == height
#         col += 1
#       else
#         row += 1
#       end
#     else
#       row += 1
#       col -= 1
#     end
#   else
#     if row == 0 or col == width
#       going_down = true
#       if col == width
#         row += 1
#       else
#         col += 1
#       end
#     else
#       row -= 1
#       col += 1
#     end
#    end
#   end
#   result
# end

# def is_out_of_bounds(row, col, height, width)
#   row < 0 or row > height or col < 0 or col > width
# end

#  array = [
#   [1, 3, 4, 10],
#   [2, 5, 9, 11],
#   [6, 8, 12, 15],
#   [7, 13, 14, 16],
# ]

# p zigzag_traverse(array); # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

# def is_toeplitz(arr)
#   (0..(arr.size - 1)).each do |row|
#     (0..(arr[0].size - 1)).each do |col|
#       if ((arr[row + 1] != undefined )
#         & (arr[row + 1][col + 1] != undefined)
#         & (arr[row + 1][col + 1] != arr[row][col]))
#         return false
#       end
#     end
#   end
#    true
# end

# arr1 = [[1,2,3,4],
#         [5,1,2,3],
#         [6,5,1,2]]

# arr2 = [[1,2,3,4],
#         [5,1,9,3],
#         [6,5,1,2]]              

# p is_toeplitz(arr1);


#----------Reload------------#

# Two number sum
# O(n) time | O(n) space 
# def two_number_sum(array, target_sum)
#     nums = {}
#     array.each do |num|
#         potential_match = target_sum - num
#         return [potential_match, num] if nums.key?(potential_match) 

#         nums[num] = true
#     end
#     []
# end

# O(nlogn) time | O(1) space
# def two_number_sum(array, target_sum)
#   array.sort
#   left = 0
#   right = array.size - 1 
#   while left < right
#     current_sum = array[left] + array[right]
#      if current_sum == target_sum
#         return [array[left], array[right]]
#      elsif current_sum < target_sum
#          left += 1 
#      else
#         right -= 1 
#      end
#   end   
#    []   
# end
# array = [3, 5, -4, 8, 11, 1, -1, 6]
# target_sum = 10
#  p two_number_sum(array, target_sum)  #[11, -1]


#  validate subsequence
#  O(n) time | O(1) space
# def validate_subsequence(array, sequence)
#   seq_idx = 0
#   arr_idx = 0
#   while seq_idx < sequence.size and arr_idx < array.size
#     seq_idx += 1 if sequence[seq_idx] == array[arr_idx]
#     arr_idx += 1
#   end
#    seq_idx == sequence.size
# end

#  array = [5, 1, 22, 25, 6, -1, 8, 10]
#  sequence = [1, 6, -1, 10]

#  p validate_subsequence(array, sequence)  # true


#  Sorted Square Array
# O(nlogn) time | O(n) space
# def sorted_square_array(array)
#   result = array.map {|item| item * item}
#   result.sort
# end

# def sorted_square_array(array)
#   sorted_array = Array.new(array.size).fill(0)
#   start_idx = 0
#   end_idx = array.length - 1
#   (0..(array.size-1)).reverse_each do |idx|
#     start_value = array[start_idx]
#     end_value = array[end_idx]
#     if start_value.abs > end_value.abs
#       sorted_array[idx] = start_value * start_value
#       start_idx += 1
#     else
#       sorted_array[idx] = end_value * end_value
#       end_idx -= 1
#     end
#   end
#   sorted_array
# end

# array = [-7, -5, -3, 4, 6, 8]

# p sorted_square_array(array)  # [9, 16, 25, 36, 49, 64]

# Tournament Winner
# HOME_TEAM_WON = 1  # No answer yet
# def tournament_winner(competitions, results)
#   current_best_team = ''
#   scores = {current_best_team: 0} 
#   (0..(competitions.length - 1)).each do |idx|
#     result = results[idx]
#     home_team, away_team = competitions[idx]
#     winning_team = result == 1 ? home_team : away_team
#     p winning_team
#     update_scores(winning_team, 3, scores)
#     p current_best_team
#     p scores[winning_team]
#     p scores[current_best_team]
#     if scores[winning_team] > scores[current_best_team]
#       current_best_team = winning_team
#     end
#   end
#   current_best_team
# end

# def update_scores(team, points, scores)
#   scores[team] = 0 unless scores.key?(team)
#   scores[team] += points
# end

# competitions = [['HTML', 'C#'], ['C#', 'Python'], ['Python', 'HTML']]
# results = [0, 0, 1]

# p tournament_winner(competitions, results) # 'python'

# def non_constructible_change(coins)
#   # O(nlogn) time | O(1) space
#   coins = coins.sort
#   current_created_change = 0
#   coins.each do |coin|
#     return current_created_change + 1 if coin > current_created_change + 1
#     current_created_change += coin
#   end 
#   current_created_change + 1   
# end

# coins = [5, 7, 1, 1, 2, 3, 22]
# p non_constructible_change(coins) # 20


# Three number sum
# O(n^2) time | O(n) space
# def three_number_sum(array, target_sum)
#   array = array.sort
#   triplets = []
#   (0..(array.size - 3)).each do |idx|
#     left = idx+1
#     right = array.size - 1
#     while left < right
#       current_sum = array[idx] + array[left] + array[right]
#       if current_sum == target_sum
#         triplets << [array[idx], array[left], array[right]]
#         left += 1
#         right -= 1
#       elsif current_sum > target_sum
#         right -= 1
#       else
#         left += 1
#       end
#     end
#   end
#   triplets
# end

# array = [12, 3, 1, 2, -6, 5, -8, 6]
# target_sum = 0

# p three_number_sum(array, target_sum) # [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

# Smallest Difference
# def Smallest_difference(array_one, array_two)
#   array_one = array_one.sort
#   array_two =array_two.sort
#   idx_one = 0
#   idx_two = 0
#   smallest = Float::INFINITY
#   while idx_one < array_one.length and idx_two < array_two.length
#     first_num = array_one[idx_one]
#     second_num = array_two[idx_two]
#     if first_num < second_num 
#       current = second_num - first_num
#       idx_one += 1
#     elsif second_num < first_num
#       current = first_num - second_num
#       idx_two += 1
#     else
#       return [first_num, second_num]
#     end
#     if smallest > current
#       smallest = current
#       smallest_pairs = [first_num, second_num]
#     end
#   end
#   smallest_pairs
# end

# array_one = [-1, 5, 10, 20, 28, 3]
# array_two = [26, 134, 135, 15, 17]

# p Smallest_difference(array_one, array_two) # [28, 26]

# # Move Element To End

# def move_element_to_end(array, to_move)
#   i=0
#   j=array.size - 1
#   while i < j
#     while i < j and array[j] == to_move
#       j -= 1
#     end
#     if array[i] == to_move
#       swap(i, j, array)
#     end
#     i += 1
#   end
#   array
# end

#  def swap(i, j, array)
#   array[i], array[j] = array[j], array[i]
#  end
# array = [2, 1, 2, 2, 2, 3, 4, 2]
# to_move = 2

# p move_element_to_end(array, to_move) # [4, 1, 3, 2, 2, 2, 2, 2]